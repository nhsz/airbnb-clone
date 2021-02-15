import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useMutation
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider, Stack, useToast } from '@chakra-ui/react';
import { FC, StrictMode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, HeaderSkeleton } from './components';
import { LogIn as LogInData, LogInVariables, LOG_IN } from './lib/graphql/mutations';
import { LogIn_logIn as Viewer } from './lib/types';
import { displayErrorNotification } from './lib/utils';
import { Home, HomeSkeleton, Host, Listing, Listings, Login, NotFound, User } from './pages';
import './styles/index.css';

const httpLink = createHttpLink({
  uri: '/api'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from session storage if it exists
  const token = sessionStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      'X-CSRF-TOKEN': token ? token : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const initialViewer: Viewer = {
  __typename: 'Viewer',
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false
};

const App: FC = () => {
  const toast = useToast();
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: data => {
      if (data && data.logIn) {
        setViewer(data.logIn);

        const { token } = data.logIn;
        if (token) {
          // successfully log-in with a cookie,set token on session storage
          sessionStorage.setItem('token', token);
        } else {
          // unsuccessful login => remove token from session storage
          sessionStorage.removeItem('token');
        }
      }
    }
  });

  const logInRef = useRef(logIn);
  useEffect(() => {
    logInRef.current();
  }, []);

  return (
    <Router>
      {error &&
        displayErrorNotification({
          toast,
          title: "Oops! We weren't able to verify you already log in.",
          description: 'Please try again later.'
        })}
      <Stack mb={16}>
        {!viewer.didRequest && !error && <HeaderSkeleton />}
        {viewer.didRequest && !error && <Header viewer={viewer} setViewer={setViewer} />}
      </Stack>
      <Switch>
        <Route exact path='/' component={!viewer.didRequest && !error ? HomeSkeleton : Home} />
        <Route exact path='/host' component={Host} />
        <Route exact path='/listings/:location?' component={Listings} />
        <Route exact path='/listing/:id' component={Listing} />
        <Route exact path='/login' render={props => <Login {...props} setViewer={setViewer} />} />
        <Route exact path='/user/:id' component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

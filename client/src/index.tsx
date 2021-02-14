import { ApolloClient, ApolloProvider, InMemoryCache, useMutation } from '@apollo/client';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { FC, StrictMode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, HeaderSkeleton } from './components';
import { LogIn as LogInData, LogInVariables, LOG_IN } from './lib/graphql/mutations';
import { LogIn_logIn as Viewer } from './lib/types';
import { Home, HomeSkeleton, Host, Listing, Listings, Login, NotFound, User } from './pages';
import './styles/index.css';

const client = new ApolloClient({
  uri: '/api',
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
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { loading, error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: data => {
      if (data && data.logIn) {
        setViewer(data.logIn);
      }
    }
  });

  const logInRef = useRef(logIn);
  useEffect(() => {
    logInRef.current();
  }, []);

  // const logInErrorBannerElement = error ? (
  //   <ErrorBanner description="We weren't able to verify if you were logged in. Please try again later!" />
  // ) : null;

  return (
    <Router>
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

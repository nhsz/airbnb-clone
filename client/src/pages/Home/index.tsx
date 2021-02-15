import { FC } from 'react';
import { HomeSkeleton } from '../../components/';

const FullScreenBackground = {
  marginTop: '-4rem',
  height: '100vh',
  backgroundImage: `url('https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg?im_w=1920')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top'
};

interface Props {
  loading: boolean;
}

const Home: FC<Props> = ({ loading }) => {
  return loading ? <HomeSkeleton /> : <div style={FullScreenBackground}></div>;

  // TODO
  // <Layout h='100vh' overflow='hidden'>
  //   <Image h='100%' objectFit='fill' src={homeBackground} alt='homepage background' />
  // </Layout>
};

export { Home };

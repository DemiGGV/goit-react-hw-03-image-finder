import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#5a5a5a"
    ariaLabel="three-dots-loading"
    wrapperStyle={{ margin: '0 auto' }}
    visible={true}
  />
);

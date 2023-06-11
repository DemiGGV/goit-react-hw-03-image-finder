import { Radio } from 'react-loader-spinner';

export const Loader = () => (
  <Radio
    visible={true}
    height="80"
    width="80"
    ariaLabel="radio-loading"
    wrapperStyle={{
      margin: '0 auto',
    }}
  />
);

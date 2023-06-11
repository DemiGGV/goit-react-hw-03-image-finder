import { ButtonS } from 'components/MainContainerCSS';

export const Button = ({ onChange }) => (
  <ButtonS type="button" onClick={() => onChange()}>
    Load more
  </ButtonS>
);

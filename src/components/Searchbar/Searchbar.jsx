import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchHead,
} from 'components/MainContainerCSS';

export const Searchbar = props => {
  const handleSubmit = (val, { resetForm }) => {
    props.onQuerry(val.querry.trim());
    resetForm();
  };

  return (
    <SearchHead>
      <Formik
        initialValues={{
          querry: '',
        }}
        onSubmit={handleSubmit}
      >
        <SearchForm autoComplete="off">
          <SearchFormButton type="submit">
            <SearchFormButtonLabel type="submit">Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="querry"
          />
        </SearchForm>
      </Formik>
    </SearchHead>
  );
};

Searchbar.propTypes = {
  onQuerry: PropTypes.func.isRequired,
};

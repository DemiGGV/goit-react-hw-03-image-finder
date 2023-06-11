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
    if (val.querry.trim() === '') {
      alert('Input your querry!');
      return;
    }
    props.onQuerry(val);
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

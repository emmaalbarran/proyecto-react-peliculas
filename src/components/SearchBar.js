import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Form className={styles.searchbar}>
      <FormControl
        type="text"
        placeholder="Buscar por título o género..."
        onChange={handleInputChange}
      />
      <Button variant="primary">Buscar</Button>
    </Form>
  );
};

export default SearchBar;



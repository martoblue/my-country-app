import { useState } from 'react';
import styles from '@/styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search countries...'
          value={query}
          onChange={handleChange}
          className={styles.searchBar}
        />
        <label className={styles.form__label} text='Search countries...'>
          Search countries...
        </label>
      </div>
    </>
  );
};

export default SearchBar;

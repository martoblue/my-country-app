'use client';

import { useState, useEffect } from 'react';
import CountryCard from '@/components/CountryCard';
import Loader from '@/components/Loader';
import { getAllCountries } from '@/services/api';
import SearchBar from '@/components/SearchBar';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    try {
      let filtered;
      if (query) {
        filtered = countries.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase()),
        );
      } else {
        filtered = countries;
      }

      setSearchError(filtered.length === 0);
      setFilteredCountries(filtered);
    } catch (error) {
      console.error('Error searching for country:', error);
    }
  };

  return (
    <Layout>
      <div className={styles.countryList}>
        <SearchBar onSearch={handleSearch} />
        <main className={styles.main}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {searchError && (
                <div className={styles.alert}>
                  No se encontraron resultados.
                </div>
              )}
              {filteredCountries.map((country) => (
                <CountryCard key={country.name.common} country={country} />
              ))}
            </>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Home;

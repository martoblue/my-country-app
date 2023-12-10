'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCountryByName } from '@/services/api';
import Layout from '@/components/Layout/index';
import styles from '@/styles/CountryDetail.module.css';
import Loader from '@/components/Loader';
import Image from 'next/image';

const CountryDetail = () => {
  const router = useRouter();
  const { countryName } = router.query;
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (countryName) {
      getCountryByName(countryName)
        .then((data) => setCountryData(data))
        .catch((error) => {
          console.error('Error fetching country details:', error);
        })
        .finally(() => setLoading(false));
    }
  }, [countryName]);

  if (loading) {
    return <Loader />;
  }

  if (!countryData) {
    return <p>Error country details</p>;
  }
  return (
    <Layout>
      <div className={styles.countryDetail}>
        <Image
          src={countryData.flags.png}
          alt={`${countryData.name.common} flag`}
          loading='lazy'
          width={500}
          height={300}
        />
        <h1>{countryData.name.common}</h1>
        <p>
          <strong>Official Name:</strong> {countryData.name.official}
        </p>
        <p>
          <strong>Population:</strong> {countryData.population}
        </p>
        <p>
          <strong>Area:</strong> {countryData.area} square kilometers
        </p>
        <p>
          <strong>Capital:</strong>{' '}
          {Object.keys(countryData.capital)
            .map((capitalCode) => countryData.capital[capitalCode])
            .join(', ')}
        </p>
        <p>
          <strong>Region:</strong> {countryData.region}
        </p>
        <p>
          <strong>Subregion:</strong> {countryData.subregion}
        </p>
        <p>
          <strong>Language:</strong>{' '}
          {Object.keys(countryData.languages)
            .map((languageCode) => countryData.languages[languageCode])
            .join(', ')}
        </p>
        <p>
          <strong>Currency:</strong>{' '}
          {Object.keys(countryData.currencies)
            .map((currencyCode) => countryData.currencies[currencyCode].name)
            .join(', ')}
        </p>
        <p>
          <strong>Demonyms Masculine:</strong> {countryData.demonyms.eng.m}
        </p>
        <p>
          <strong>Demonyms Feminine:</strong> {countryData.demonyms.eng.f}
        </p>
      </div>
    </Layout>
  );
};

export default CountryDetail;

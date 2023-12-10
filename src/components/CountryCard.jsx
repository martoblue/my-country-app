'use client';

import styles from '../styles/CountryCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CountryCard = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      <Link
        href={`/country/${country.name.common}`}
        className={styles.anchorContainer}
      >
        <section className={styles.countryCardBody}>
          <Image
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            loading='lazy'
            width={500}
            height={300}
          />
          <h2>{country.name.common}</h2>
        </section>
      </Link>
    </div>
  );
};

export default CountryCard;

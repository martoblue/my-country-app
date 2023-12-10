'use client';

import styles from '@/styles/AboutUs.module.css';
import Layout from '@/components/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <div className={styles.aboutUs}>
        <h2>About Us</h2>
        <p>
          Welcome to Country Explorer, your go-to platform for exploring
          information about countries worldwide. We understand the importance of
          staying informed about different nations, their cultures, and key
          statistics. Our platform provides a user-friendly interface to
          seamlessly access data sourced from the REST Countries API.
        </p>
        <p>
          Whether you&apos;re a travel enthusiast, a student working on a
          geography project, or simply curious about the world, Country Explorer
          is designed for you. Dive into comprehensive details about each
          country, including population, area, capital, languages, currencies,
          and much more.
        </p>
        <p>
          We are committed to delivering accurate and up-to-date information in
          a visually appealing manner. Explore flags, maps, and other
          fascinating details with ease. Country Explorer is your passport to a
          world of knowledge. Start your journey of discovery today!
        </p>
      </div>
    </Layout>
  );
};

export default AboutUs;

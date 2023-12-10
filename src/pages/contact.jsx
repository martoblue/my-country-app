'use client';

import styles from '@/styles/Contact.module.css';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='4' required></textarea>

          <button type='submit'>Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

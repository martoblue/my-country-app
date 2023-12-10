import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href='https://github.com/martoblue'
        target='_blank'
        className={styles.anchorFooter}
      >
        github.com/martoblue
      </Link>
      <p>&copy; 2023 Luis Martorelli</p>
      <Link
        href='https://cl.linkedin.com/in/luis-martorelli/'
        target='_blank'
        className={styles.anchorFooter}
      >
        linkedin.com/luis-martorelli/
      </Link>
    </footer>
  );
};

export default Footer;

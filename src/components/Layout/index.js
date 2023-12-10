import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = ({ children }) => (
  <motion.div
    initial='initialState'
    animate='animateState'
    exit='exitState'
    transition={{
      type: 'tween',
      duration: 0.5,
    }}
    variants={{
      initialState: {
        opacity: 0,
      },
      animateState: {
        opacity: 1,
      },
      exitState: {
        opacity: 0,
      },
    }}
  >
    <Navbar />
    {children}
    <Footer />
  </motion.div>
);
export default Layout;

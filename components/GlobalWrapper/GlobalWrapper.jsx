import Header from '../Header';
// import styles from './globalWrapper.module.scss';


const GlobalWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalWrapper;

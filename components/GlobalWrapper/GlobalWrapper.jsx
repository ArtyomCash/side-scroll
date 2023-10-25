import Header from '../Header';

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalWrapper;

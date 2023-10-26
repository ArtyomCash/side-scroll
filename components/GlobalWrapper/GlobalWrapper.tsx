import { NextPage } from 'next/types';
import Header from '../Header';

const GlobalWrapper: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalWrapper;

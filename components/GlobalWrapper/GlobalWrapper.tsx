import { NextPage } from 'next';
import Header from '../Header';
import { GlobalWrapperProps } from './interface'

const GlobalWrapper: NextPage<GlobalWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalWrapper;

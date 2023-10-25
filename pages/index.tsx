import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import styles from './index.module.scss'
import GlobalWrapper from '../components/GlobalWrapper/GlobalWrapper'
import About from "../components/About";
// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical test => Socreative Digital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <GlobalWrapper>
            {/*<About />*/}
          </GlobalWrapper>
        {/*<Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />*/}
    </>
  )
}

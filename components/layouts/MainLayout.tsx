import Head from 'next/head'
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'


export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Cami</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />



          <main className={styles.main} >
          { children }
          </main>
        </div>
      )
}

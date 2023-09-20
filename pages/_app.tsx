
import '../styles/globals.css'
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode, ReactElement } from 'react';


//noombre personalizado, lo recomeinda next estos nombres
type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}


type AppPropsWithLayout = AppProps & {
Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default App
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 3000,
      once: true,
      offset: 50,
      delay: 50,
    })  
  });

  return <Component {...pageProps} />
}

export default MyApp

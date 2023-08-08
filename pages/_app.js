import React from 'react';
import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  // const router = useRouter(); // Initialize useRouter

  // useEffect(() => {
  //   // Retrieve the previous URL from sessionStorage
  //   const previousUrl = sessionStorage.getItem('previousUrl');

  //   // Clear the stored URL after retrieval
  //   sessionStorage.removeItem('previousUrl');

  //   // If a previous URL is stored, redirect to it
  //   if (previousUrl) {
  //     router.push(previousUrl);
  //   }
  // }, []);
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp

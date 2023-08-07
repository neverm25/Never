// #region Global Imports
import { useState ,useEffect } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/App.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import Script from "next/script";
import { useRouter } from 'next/router';
import { Provider } from "react-redux";
import { NextSeo } from 'next-seo';
import Head from "next/head"
// #endregion Global Imports

// #region Local Imports
import dynamic from "next/dynamic";
import store from 'src/redux'
import NextNProgress from 'nextjs-progressbar';

//import "@Static/css/main.scss";
import { Layout as DJobsLayouts } from "@DJobs/Components/Layout";
import {Layout as GlobalLayout} from "@Global/Components/Layout";
import { theme } from "@Global/Theme";
import { SOCIAL_AUTH_IDS } from '@DJobs/DjobsUtils/SocialAuthIds';
import { regionNames } from '@DJobs/Components/Layout/Header/Utils/HeaderUtils';
import {  setCookie, hasCookie } from 'cookies-next';
const Cookies = dynamic(import("@DJobs/Components/Cookies").then(module => module));
// #endregion Local Imports

export const disablePageScroll = () => document.querySelector("body").style.overflow = "hidden";
export const enablePageScroll = () => document.querySelector("body").style.overflow = "auto";
type IProps = AppProps & {
  userCountry:string
} 
 
export default function MyApp({ Component, pageProps,userCountry }: IProps) {
  const [showCookiesPopup,setShowCookiesPopup] = useState(true);
  const router = useRouter()
  const IS_GLOBAL_PAGE = router.asPath.startsWith("/Global");
  
  useEffect(() => {
    setTimeout(() => {
      let cookiesAcceptedAlready = JSON.parse(localStorage.getItem("isCookiesAccepted")) as boolean;
      const isGumeTree = router.pathname.startsWith("/DJobs/job/gumtree");
      if(!cookiesAcceptedAlready && !isGumeTree){
        setShowCookiesPopup(false)
        disablePageScroll()
      }
    }, 1000 );

    if(!hasCookie("userCountry")){
      if(regionNames[userCountry as string]){
        setCookie("userCountry",userCountry as string)
      }
      else{
        setCookie("userCountry",process.env.NEXT_PUBLIC_DEFAULT_FLAG)
      }
    }
  },[userCountry]);

  const initializeFB = () => {
    window.globalThis.FB.init({
      appId : SOCIAL_AUTH_IDS.FACEBOOK_APP_ID,
      autoLogAppEvents : true,
      xfbml : true,
      version : 'v15.0'
    });
  };

    const seoRender = (
    <NextSeo
      title="Ditto Jobs"
      description="Ready to move up? Welcome to Ditto Jobs. Discover thousands of new opportunities daily! Sign up and kickstart your job search today."
      openGraph={{
        site_name: "Ditto Jobs",
        type: "website",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        title: "Get HIRED with Ditto Jobs.",
        description:
          "Are you ready to make your move? Sign up today and discover thousands of new vacancies on Ditto Jobs.",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/generic`,
            width: 1200,
            height: 630,
            alt: "Og Image Alt",
          },
        ],
      }}
    />
  );


  return (
    <Provider store={store}>
       {seoRender}
      <Head>
        <link rel="icon" type="image/png" sizes="64x64" href="/FavIcons/favicon.ico"/>
        <link rel="apple-touch-icon" type="image/png" sizes="64x64" href="/FavIcons/favicon.ico"/>
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" />
      </Head>
      <ThemeProvider theme={theme}>
        <NextNProgress options={{showSpinner:false}} height={3}/>

        
        {/* Social authentication */}
        <Script src="https://accounts.google.com/gsi/client" />
        <meta name={SOCIAL_AUTH_IDS.GOOGLE_CLIENT_ID} content={SOCIAL_AUTH_IDS.GOOGLE_CLIENT_ID}></meta>
        <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" onLoad={initializeFB}></Script>
        {/* Social authentication end */}
        
        {IS_GLOBAL_PAGE ? 
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout> :
        <DJobsLayouts>

          <Component {...pageProps} />
        </DJobsLayouts>}
        {!showCookiesPopup && <Cookies />}
        <ToastContainer position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  return {userCountry:appContext.ctx.query.country}
}

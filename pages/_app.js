import '../styles/globals.css';

/*
* The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
* */
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
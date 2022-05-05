import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

{
  /*
  Special page, kind of route component. It receives props and uses object destructuring to pull information out of the props. 
  Component and page prop which are passed to our MyApp component automatically by NextJS since NextJS is the things using that component.
  The actual page content of our different pages. 
  <Layout/> wrapped means that our different page contents will be wrapped with this layout component. 

  Component is a prop that holds the actual page content that should be rendered.
  So it will be different whenever we switch a page.
  
  Page props are specific props, that our pages might ve getting. 
  */
}

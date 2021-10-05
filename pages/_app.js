import '../styles/globals.css'
import MainLayout from '../components/Layout/Main'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp

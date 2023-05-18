import Layout from "../components/Layout";
import './globals.css';

function App({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App


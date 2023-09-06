import Value from "../components/Value";
import Kartapay from "../components/Kartapay";
import Products from "../components/Products";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Kartalys Landing Page' />
      <Layout>
        <Hero />
        <Kartapay />
        <Products />
        <Value />
      </Layout>
    </>
  );
}

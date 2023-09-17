import Value from "../components/Value";
import Kartapay from "../components/Kartapay";
import Solutions from "../components/Solutions";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Team from "../components/Team";
import Expertise from "../components/Expertise";

export default function Home() {
  return (
    <>
      <SeoHead title='KartaLys' />
      <Layout>
        <Hero />
        <Kartapay />
        <Solutions />
        <Value />
        <Expertise />
        <Team />
      </Layout>
    </>
  );
}

import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeComp from "../components/LargeComp";
import Footer from "../components/Footer";

export default function Home({ data, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((loc) => (
              <SmallCard key={loc.img} loc={loc} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex overflow-x-scroll space-x-3 overflow-y-hidden scrollbar-hide p-3 -ml-3">
            {cardsData?.map((d, i) => (
              <MediumCard data={d} key={i} />
            ))}
          </div>
        </section>
        <section>
          <LargeComp
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            buttonTxt="Get Inspired"
            des="Wishlists curated by Airbnb"
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://links.papareact.com/pyp");
  const data = await req.json();
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
      cardsData,
    },
  };
}

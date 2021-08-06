import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, numberOfGuests, endDate } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {numberOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filter-my">Cancellation Flexibility</p>
            <p className="filter-my">Type of places</p>
            <p className="filter-my">Price</p>
            <p className="filter-my">Rooms and Beds</p>
            <p className="filter-my">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((res) => (
              <InfoCard res={res} key={res.img} />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (s) => s.json()
  );
  return {
    props: { searchResults },
  };
}

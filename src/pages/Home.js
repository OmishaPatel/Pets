import DownloadImage from "../components/DownloadImage";
import PetsList from "../components/PetsList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />

      {/* <DownloadImage /> */}
      <PetsList />
    </main>
  );
};
export default Home;

import Jumbotron from "./homepage/Jumbotron";
import HistorySection from "./homepage/HistorySection";
import FormContact from "./homepage/FormContact";

function HomePage() {
  return (
    <main className="mx-auto">
      <Jumbotron />
      <HistorySection />
      <FormContact />
    </main>
  );
}

export default HomePage;

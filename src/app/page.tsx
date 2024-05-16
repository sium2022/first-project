import Header from "./component/Header/1-header";
import FeatureProduct from "./component/2-feature-products";
import GreatTea from "./component/3-great-tea";
import ClientsReview from "./component/4-clients-review";
import NewsEvents from "./component/5-news-events";
import Footer from "./component/6-footer";

export default function Home() {
  return (
    <main className="bg-white mt-0">
      <Header />
      <FeatureProduct/>
      <GreatTea/>
      <ClientsReview/>
      <NewsEvents/>
      <Footer/>
    </main>
  );
}

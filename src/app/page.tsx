import Header from "./component/header/header";
import FeatureProduct from "./component/header/feature-products";

export default function Home() {
  return (
    <main className="bg-white mt-0">
      <Header />
      <FeatureProduct/>
    </main>
  );
}

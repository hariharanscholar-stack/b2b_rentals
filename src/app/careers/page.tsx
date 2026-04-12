import CareersPage from "../../components/sections/CareersPage";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1">
        <CareersPage />
      </div>
      <Footer />
    </main>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <h1 className="text-5xl font-bold text-center">Welcome to My Portfolio</h1>
          <p className="text-center mt-4">A showcase of my skills and projects.</p>
        </section>
        <SectionTitle>Featured Projects</SectionTitle>
        {/* Add project cards here */}
      </main>
      <Footer />
    </>
  );
}
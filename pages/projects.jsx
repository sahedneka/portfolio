import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Add ProjectCard components here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
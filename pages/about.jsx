import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4">I am a passionate developer with expertise in frontend technologies...</p>
      </main>
      <Footer />
    </>
  );
}
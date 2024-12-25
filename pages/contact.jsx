import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form className="mt-6 space-y-4">
          <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" />
          <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" />
          <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
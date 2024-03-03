import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
}

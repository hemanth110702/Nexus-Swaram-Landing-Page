import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import FoundingTeam from "./components/FoundingTeam";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <FoundingTeam />
      <Footer />
    </>
  );
}

export default App;

/* 1. Navbar (Sticky)
Content: Nexus Swarm logo on the left, with links like Home, About Us, Founders, and Contact.
Design: Simple and sticky to stay accessible as users scroll.
2. Hero Section
Logo and Tagline: Center the Nexus Swarm logo with the tagline below (e.g., “Uniting Talents, Fueling Ideas”).
CTA Button: Add a button labeled “Learn More” or “Meet the Team” that anchors down to the About or Founding Team section.
3. About Section
Overview Text: Include the Nexus Swarm overview here:
“At NEXUS, we believe in the power of connection. A central point where students from all walks of life come together to empower, explore, and unite.”

Design: Keep it short, clear, and visually inviting with icons or minimalistic design elements that represent community and collaboration.
4. Founding Team Section
Layout: Use a grid or card-style layout to display each founder.
Content for Each Card:
Profile photo
Name and Role (e.g., DEEPAK SREERAM - Founder)
A short bio or one-line description, if available.
Design: Minimalist, with interactive hover effects to add polish.
5. Footer with Social Media Links & Contact Form
Social Media Links: Links to platforms like LinkedIn, Instagram, etc.
Contact Form: Simple form with fields for name, email, and message.
Additional Links: Include terms, privacy, or any other necessary links. */

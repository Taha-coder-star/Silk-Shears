import Nav         from './components/Nav.jsx';
import Hero        from './components/Hero.jsx';
import Marquee     from './components/Marquee.jsx';
import Services    from './components/Services.jsx';
import Stylists    from './components/Stylists.jsx';
import Editorial   from './components/Editorial.jsx';
import Gallery     from './components/Gallery.jsx';
import Reviews     from './components/Reviews.jsx';
import Membership  from './components/Membership.jsx';
import Contact     from './components/Contact.jsx';
import Footer      from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stylists />
        <Editorial />
        <Gallery />
        <Reviews />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

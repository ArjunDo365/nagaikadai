import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./store";
import {
  toggleRTL,
  toggleTheme,
  toggleLocale,
  toggleMenu,
  toggleLayout,
  toggleAnimation,
  toggleNavbar,
  toggleSemidark,
} from "./store/themeConfigSlice";
import store from "./store";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./assets/css/styles.css";
import JewelHero from "./pages/JewelHero";
import { Phone } from "lucide-react";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import GoldRate from "./pages/GoldRate";
import Location from "./pages/Location";

function App({ children }: PropsWithChildren) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled halfway down the page
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
  //     dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
  //     dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
  //     dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
  //     dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
  //     dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
  //     dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
  //     dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
  // }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

  return (
    // <div
    //     className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
    //         themeConfig.rtlClass
    //     } main-section antialiased relative font-nunito text-sm font-normal`}
    // >
    //     {children}
    // </div>
    <div>
      <Header />
      <main>
        {/* <Hero /> */}
        <JewelHero />
        <AboutUs/>
        <Services/>
        <GoldRate/>
        <Location/>
        {/* <Trusted />
        <VoiceDemo />
        <Features />
        <Industries />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA /> */}
      </main>
      <Footer />
      <div className="floating-cta floating">
        {showButton && (
          <button
            type="button"
            className="gtp-btn go-top"
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="floating-cta-label">
              <strong>Go to Top</strong>
            </span>
          </button>
        )}
        <button
          type="button"
          className="floating-cta-btn"
          onClick={() =>
            document
              .getElementById("cta")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="floating-cta-iconwrap p-1"><Phone/></span>
          <span className="floating-cta-label">
            <strong>Call Us</strong>
            {/* <span>Avg. reply &lt; 1 business day</span> */}
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;

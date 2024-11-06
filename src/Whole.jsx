import React, { useState, useEffect, useRef } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
import { IoIosArrowUp } from "react-icons/io";
import { Helmet } from "react-helmet";
import _ from "lodash"; // For throttling

const Whole = () => {
  const [activeSection, setActiveSection] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: document.getElementById("home") },
      { id: "experience", ref: document.getElementById("experience") },
      // { id: "projects", ref: document.getElementById("projects") },
      { id: "knowlage", ref: document.getElementById("knowlage") },
      { id: "connect", ref: document.getElementById("connect") },
    ];

    const handleScroll = _.throttle(() => {
      const scrollY = scrollContainerRef.current.scrollTop;
      const containerHeight = scrollContainerRef.current.clientHeight;

      sections.forEach((section) => {
        const sectionTop = section.ref.getBoundingClientRect().top + scrollY; // Get section's top relative to the container
        const sectionMidPoint = sectionTop + section.ref.clientHeight / 2;

        // If the scroll position is beyond the midpoint of the section, it becomes active
        if (
          scrollY >= sectionTop - containerHeight / 2 &&
          scrollY < sectionMidPoint + containerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    }, 200);

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const [show, setShow] = useState(true);

  const getMetaTags = () => {
    switch (activeSection) {
      case "home":
        return { title: "Home", description: "Welcome to my home page" };
      case "experience":
        return {
          title: "Experience",
          description: "Learn about my experience",
        };
      // case "projects":
      //   return { title: "Projects", description: "View my projects" };
      case "knowlage":
        return { title: "Knowledge", description: "Testimonials" };
      case "connect":
        return { title: "Contact", description: "Get in touch with me" };
      default:
        return { title: "Home", description: "My portfolio page" };
    }
  };

  const metaTags = getMetaTags();

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
      </Helmet>

      {/* for mobile menu */}
      <div
        className={`flex flex-col sm:flex-row gap-2 fixed ${
          show
            ? "translate-y-[610px] sm:translate-y-[50px] sm:translate-x-[550px]"
            : "translate-y-[440px] sm:translate-y-[50px] sm:translate-x-[0px]"
        } z-50 right-5 items-center transition duration-300`}
      >
        <div
          className={`w-7 h-7 bg-red-600 ${
            show ? "mr-0 sm:mr-32 mb-32 sm:mb-0" : "sm:mr-0 mb-0"
          } flex text-white items-center justify-center rounded-md`}
        >
          <IoIosArrowUp
            onClick={() => setShow(!show)}
            className={`${
              show ? "sm:-rotate-90" : "sm:rotate-90 rotate-180 "
            } text-lg transition duration-300 w-11 rounded-md`}
          />
        </div>
        {["home", "experience", "projects", "knowlage", "connect"].map(
          (section) => (
            <div
              key={section}
              onClick={() => {
                setShow(!show);
                scrollToSection(section);
              }}
              className={`${
                show ? "hidden" : ""
              } active font-bold py-2 rounded-lg flex justify-center w-20 text-[8px] text-white transition duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          )
        )}
      </div>

      {/* inner data */}
      <div
        ref={scrollContainerRef}
        className="sm:w-full h-[100vh] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600"
      >
        <div id="home">
          <Home
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
          />
        </div>
        <div id="experience">
          <About />
        </div>
        {/* <div id="projects">
          <Projects />
        </div> */}
        <div id="knowlage">
          <Testimonial />
        </div>
        <div id="connect">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Whole;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./App.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);

const App = () => {

  const galleryRef = useRef(null);
  
  const triggerFlipOnScroll = (galleryEl, options) => {
    let settings = {
      flip: {
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
      },
      scrollTrigger: {
        start: "center center",
        end: "+=300%",
      },
      stagger: 0,
    };

    settings = Object.assign({}, settings, options);

    const galleryCaption = galleryEl.querySelector(".caption");
    const galleryItems = galleryEl.querySelectorAll(".gallery__item");
    const galleryItemsInner = [...galleryItems].flatMap((item) =>
      item.children.length > 0 ? [...item.children] : []
    );

    galleryEl.classList.add("gallery--switch");
    const flipstate = Flip.getState([galleryItems, galleryCaption], {
      props: "filter, opacity",
    });
    galleryEl.classList.remove("gallery--switch");

    const tl = Flip.to(flipstate, {
      ease: "none",
      absoluteOnLeave: settings.flip.absoluteOnLeave,
      absolute: settings.flip.absolute,
      scale: settings.flip.scale,
      simple: settings.flip.simple,
      // duration: 5,
      scrollTrigger: {
        trigger: galleryEl,
        start: settings.scrollTrigger.start,
        end: settings.scrollTrigger.end,
        pin: galleryEl.parentNode,
        scrub: true,
        markers: true,
      },
      stagger: settings.stagger,
    });
  };

  useGSAP(() => {
    const galleryEl = galleryRef.current;

    if (galleryEl) {
      triggerFlipOnScroll(galleryEl, {
        flip: { absoluteOnLeave: true, scale: false },
      });
    }
  }, {scope: galleryRef});

  return (
    <main>
      <div className="frame">
        <div className="frame__title">
          <h1 className="frame__title-main">
            On-Scroll Image Layout Animations
          </h1>
          <a
            aria-label="Back to the article"
            className="frame__title-back"
            href="https://tympanus.net/codrops/?p=72941"
          >
            <span className="oh__inner">Back to the article</span>
            <svg width="18px" height="18px" viewBox="0 0 24 24">
              <path
                vectorEffect="non-scaling-stroke"
                d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
              ></path>
            </svg>
          </a>
        </div>
        <a
          className="frame__prev"
          href="https://tympanus.net/Development/TextBlockTransitions/"
        >
          Previous demo
        </a>
      </div>
      <section className="project project--intro">
        <span className="project__label project__label--name">Project</span>
        <span className="project__name">AI Art</span>
        <span className="project__label project__label--date">Date</span>
        <span className="project__date">July, 2023</span>
        <h2 className="project__title">
          <span className="project__title-line">Creativity</span>
          <span className="project__title-line">Redefined</span>
        </h2>
        <span className="project__label project__label--mission">Mission</span>
        <div className="project__mission">
          <p>
            The AI-Art Project is a transformative initiative dedicated to
            exploring the immense impact of AI-generated art on the art world
            and artists. We aim to discover and promote exceptional AI-generated
            artworks that push the boundaries of creativity, redefine
            traditional practices, and provoke thought.
          </p>
          <p>
            Through collaborations with artists, workshops, and educational
            programs, we empower artists to leverage AI as a tool for
            exploration, expanding their artistic horizons and embracing new
            forms of expression.
          </p>
        </div>
      </section>
      <div className="gallery-wrap">
        <div ref={galleryRef} className="gallery gallery--row" id="gallery-1">
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--xl gallery__item--center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div className="caption">
            Within this meticulously arranged AI-generated ensemble lies a
            tantalizing facade, captivating our gaze. Yet, as we search for the
            soul of human expression, we question whether algorithms can truly
            embody the essence of authentic art.
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

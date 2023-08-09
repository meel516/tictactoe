import { useEffect } from "react";
import "./FrameComponent.css";
const FrameComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="frame-parent">
      <button className="rectangle-parent">
        <button className="frame-inner" />
        <img className="ellipse-icon" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="rectangle-group">
        <div className="rectangle-div" />
        <img className="frame-child1" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="rectangle-container">
        <div className="rectangle-div" />
        <img className="frame-child3" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="frame-button">
        <div className="rectangle-div" />
        <img className="frame-child3" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="rectangle-parent1">
        <div className="rectangle-div" />
        <img className="ellipse-icon" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="rectangle-parent2">
        <div className="rectangle-div" />
        <img className="ellipse-icon" alt="" src="/ellipse-3@2x.png" />
      </button>
      <button className="rectangle-parent3">
        <div className="rectangle-div" />
        <img className="frame-child11" alt="" src="/vector-4.svg" />
      </button>
      <button className="rectangle-parent4">
        <div className="rectangle-div" />
        <img className="frame-child13" alt="" src="/vector-4.svg" />
      </button>
      <button className="rectangle-parent5">
        <div className="rectangle-div" />
        <img className="frame-child15" alt="" src="/vector-4.svg" />
      </button>
      <button className="players">
        <div className="players1">2 Players</div>
      </button>
      <h1 className="x-wins-wrapper" data-animate-on-scroll>
        <div className="x-wins">
          <p className="x">X</p>
          <p className="wins"> Wins</p>
        </div>
      </h1>
    </div>
  );
};

export default FrameComponent;

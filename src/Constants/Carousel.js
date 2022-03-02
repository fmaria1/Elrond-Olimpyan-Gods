import afrodita from "../Images/afrodita.jpg";
import ares from "../Images/ares.jpg";
import artemis from "../Images/artemis.jpg";
import athena from "../Images/athena.jpg";
import hades from "../Images/hades.jpg";
import hapollo from "../Images/hapollo.jpg";
import hera from "../Images/hera.png";
import hermes from "../Images/hermes.jpg";
import poseidon from "../Images/poseidon.jpg";
import zeus from "../Images/zeus.jpg";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const CarouselData = [
  <div className="item" data-value="1">
    <img src={afrodita} alt="" onDragStart={handleDragStart} key="1" />
  </div>,
  <div className="item" data-value="2">
    <img src={ares} alt="" onDragStart={handleDragStart} key="2" />
  </div>,
  <div className="item" data-value="3">
    <img src={artemis} alt="" onDragStart={handleDragStart} key="3" />
  </div>,
  <div className="item" data-value="4">
    <img src={athena} alt="" onDragStart={handleDragStart} key="4" />
  </div>,
  <div className="item" data-value="5">
    <img src={hades} alt="" onDragStart={handleDragStart} key="5" />
  </div>,
  <div className="item" data-value="6">
    <img src={hapollo} alt="" onDragStart={handleDragStart} key="6" />
  </div>,
  <div className="item" data-value="7">
    <img src={hera} alt="" onDragStart={handleDragStart} key="7" />
  </div>,
  <div className="item" data-value="8">
    <img src={hermes} alt="" onDragStart={handleDragStart} key="8" />
  </div>,
  <div className="item" data-value="9">
    <img src={poseidon} alt="" onDragStart={handleDragStart} key="9" />
  </div>,
  <div className="item" data-value="10">
    <img src={zeus} alt="" onDragStart={handleDragStart} key="10" />
  </div>,
];
export default CarouselData;

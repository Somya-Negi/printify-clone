import React, { useEffect, useRef, useState } from "react";
import mainstore from "../assests/images/mainstore.jpg";
import store1 from "../assests/images/store1.jpg";
import store2 from "../assests/images/store2.jpg";
import store3 from "../assests/images/store3.jpg";
import store4 from "../assests/images/store4.jpg";
import store5 from "../assests/images/store5.jpg";
import store6 from "../assests/images/store6.jpg";
import store7 from "../assests/images/store7.jpg";
import "../styles/stores.css";

const Stores = () => {
    const [inView, setInView] = useState(false);
    const storesRef = useRef(null);
    useEffect(() => {
        const currentRef = storesRef.current;
      
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              setInView(true);
              observer.disconnect();
            }
          },
        );
      
        if (currentRef) {
          observer.observe(currentRef);
        }
      
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      
      
      }, []); 
      
      
  return (
    <div ref={storesRef} className="stores-container">
      <div className="stores-shape">
        <div className="stores-title">
          <h2 className="store-heading">Connect Your Store</h2>
          <p className="store-text">
            Integrate seamlessly with top platforms and marketplaces
          </p>
        </div>

        <div className="stores-logos">
          <img src={mainstore} alt="Printify" className="printify-logo" />
          <div className={`store-images ${inView ? "animate-logos" : ""}`}>
            <img src={store1} alt="Store 1" className="store-logo" />
            <img src={store2} alt="Store 2" className="store-logo" />
            <img src={store3} alt="Store 3" className="store-logo" />
            <img src={store4} alt="Store 4" className="store-logo" />
            <img src={store5} alt="Store 5" className="store-logo" />
            <img src={store6} alt="Store 6" className="store-logo" />
            <img src={store7} alt="Store 7" className="store-logo" />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Stores;


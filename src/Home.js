import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Goplus® 34 Wood Globe Wine Bar Stand 16th Century Italian Rack Bigger Shelf for More Liquor Bottle"
            price={179.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61yw3DxLNiL._AC_SY450_.jpg"
          />
          <Product
            id="49538094"
            title="Aveyas 6ft Artificial Fiddle Leaf Fig Tree in Plastic Nursery Pot, Ficus Lyrata Fake Tropical Plant for Office House Living Room Home Decor ( Indoor / Outdoor )"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71kPMuyZFtL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 7 (GPS + Cellular 45mm) Graphite Stainless Steel Case with Abyss Blue Sport Band (Renewed)"
            price={599.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71aY6fOBaOL._AC_SY450_.jpg"
          />

          <Product
            id="99903850"
            title="Canon EOS R RF24-105mm F4-7.1 IS STM Lens Kit, Vlogging and Content Creator Camera 4K UHD, Digital Single-Lens Non-Reflex AF/AE, 0.4 Magnification,..."
            price={1899}
            rating={4}
            image="https://m.media-amazon.com/images/I/71N++WQnA7L._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Sony 85 Inch 4K Ultra HD TV X90K Series: BRAVIA XR Full Array LED Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR85X90K- 2022 Model"
            price={2998}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-BV4jCJQL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="
            Shark AV1010AE IQ Robot Vacuum with XL Self-Empty Base, Bagless, 45-Day Capacity, Advanced Navigation, Alexa & Wi-Fi, Multi-Surface Brushroll, for Pets"
            price={599}
            rating={5}
            image="https://m.media-amazon.com/images/I/71TtU5vBrcL._AC_SL1500_.jpg"
          />
          <Product
            id="8903851"
            title="AOTOB 8FT 10FT 12FT 14FT 15FT Trampoline with Safety Enclosure Net，Outdoor Trampoline with Basketball Hoop, Heavy Duty Jumping Mat and Spring Cover Padding for Kids and Adults, Storage Bag and Ladder"
            price={364.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91dUOHcgOQS._AC_SX425_.jpg"
          />
          <Product
            id="23445930"
            title="ULTIMATE SACK Bean Bag Chairs in Multiple Sizes and Colors: Giant Foam-Filled Furniture - Machine Washable Covers, Double Stitched Seams, Durable Inner Liner. (6000, Teal Suede)"
            price={234}
            rating={5}
            image="https://m.media-amazon.com/images/I/51mKZisgvOL._AC_.jpg"
          /> 
         </div>
      </div>
    </div>
  );
}

export default Home;

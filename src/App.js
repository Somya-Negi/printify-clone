import React from 'react';
import Navbar from './components/navbar'; 
import Banner from './components/banner'; 
import Detail from './components/detail'; 
import AddProducts from './components/addproducts'; 
import Tags from './components/tags';
import Stores from './components/stores';
import Contact from './components/contact';
import Testimonials from './components/testimonials';
import Risk from './components/risk';
import Links from './components/links';
import Description from './components/description';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Detail />
      <AddProducts />
      <Tags />
      <Stores />
      <Contact />
      <Testimonials />
      <Risk />
      <Links />
      <Description />
      <Footer />
    </div>
  );
}

export default App;

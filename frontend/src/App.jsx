import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import FileEncrypt from './Components/sender/sender.jsx';
import FileDecrypt from './Components/reciever/reciever';



const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <div className="container">
                <Title subTitle="Our PROGRAM" title="Our feature" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Feedback" title="What User Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </div>
          }
        />
        <Route path="/encrypt" element={<FileEncrypt />} />
        <Route path="/decrypt" element={<FileDecrypt />} />
      </Routes>
    </>
  );
};

export default App
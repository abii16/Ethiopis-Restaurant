import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Buttonhero from './buttonhero';
import Arrow from './arrows';
import Scrolls from './scrolls';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg'
const images = [hero1, hero2,hero1,hero2];

const Hero =()=>{
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const scrollslide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen bg-center bg-cover rounded-2xl transition-all duration-1500"
      style={{ backgroundImage: `url(${images[currentIndex]})`, margin: '15px' }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        <div className=' text-center flex  justify-center'>
          <h1 className='text-white font-beau text-center text-8xl mt-30' >Ethiopis Restaurant</h1>
        </div>
        <div className="pb-2">
          <Arrow prevSlide={prevSlide} nextSlide={nextSlide} />
          <Buttonhero />
          <Scrolls images={images} currentIndex={currentIndex} scrollslide={scrollslide} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
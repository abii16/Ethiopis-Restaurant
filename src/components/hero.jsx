import Navbar from './Navbar'
import heroImage from '../assets/hero1.jpg';
import Buttonhero from './buttonhero'
import Arrow from './arrows'
import Scrolls from './scrolls';

function Hero() {

  return (
    <div 
      className="h-screen bg-center rounded-2xl " 
      style={{ backgroundImage: `url(${heroImage} )`, width:'auto', margin:'15px' }}
    >
      <Navbar />
      <div className='text-center'>

        <h1 className='text-white font-beau text-center pt-35 text-8xl'>Ethiopis Restaurant</h1>


      </div>
      <Arrow/>
      <Buttonhero />
      <Scrolls />
      
      
    </div>
  )
}

export default Hero;
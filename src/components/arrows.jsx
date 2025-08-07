import ar from '../assets/right-arrow.png'
import al from '../assets/left-arrow .png'

const Arrows = ({ prevSlide, nextSlide }) => {
    return(
        <>
            <div className='flex justify-between'>
                <img src={al} alt="arr l" onClick={prevSlide} className='cursor-pointer px-3 w-9 h-7 active:bg-white/50 active:animate-ping active:rounded-full' />
                <img src={ar} alt="arr r" onClick={nextSlide} className='cursor-pointer px-3 w-9 h-7 active:bg-white/50 active:animate-ping active:rounded-full' />
            </div>
        </>
    )
}

export default Arrows;
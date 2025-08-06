
import ar from '../assets/right-arrow.png'
import al from '../assets/left-arrow .png'
const Arrows=()=>{
    return(
        <>
        <div className='flex justify-between'>
            <img src={al} alt="arr l" className='w-7 h-7 '/>
            <img src={ar} alt="arr r" className='size-7 '/>
        </div>
        </>



    )
}
export default Arrows
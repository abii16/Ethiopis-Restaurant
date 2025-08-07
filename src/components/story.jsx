import cheif from '../assets/chefs.jpg'
const Story=()=>{
    return(

        <div className='border-2 border-b-blue-950 border-t-emerald-800 rounded-2xl p-8 m-4 border-l-yellow-500 border-r-red-800 '>
            <h1 className='text-center text-4xl font-bold  '>Our Story</h1>
            <div className='flex justify-center gap-x-30 mt-10'>
                <p className='pt-16'>
                    In 2021, two passionate Ethiopian chefs turned friendship into a mission.<br/>
                    Their love for Ethiopia’s food, culture, and history ran deep.
                    <br/>
                    They believed the world needed to taste authentic Ethiopian flavors.<br/>
                    Starting with Africa, they shared injera, spices, and tradition across borders.<br/>
                    <br />Their journey carried them beyond spreading Ethiopian food into Europe.<br/>
                    Every plate became a story of heritage, pride, and connection.<br/>
                    Their restaurant is more than food it’s Ethiopia on the global stage.<br/>
                    And their vision grows, one country, one table, one taste at a time.
                </p>
                <img src={cheif} alt="cheifs" className='size-90 rounded-4xl mb-5' />
            </div>

        </div>
    )
};
export default Story;
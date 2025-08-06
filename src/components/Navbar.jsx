import logo from '../assets/logo.png';
import lamb from '../assets/lightbulb.png';

const Navbar = () => {
    return (
        <div className="p-5 top-0 sticky ">
            <ul className="flex justify-between items-center bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl w-full p-1 shadow-lg">
                <li>
                    <a href="/">
                        <img src={logo} alt="logo" className="w-13 pl-5" />
                    </a>
                </li>
                <div className='flex items-center gap-x-25 '>
                    <li><a href="/" className="text-black font-bold hover:text-gray-700">HOME</a></li>
                    <li><a href="/" className="text-black font-bold hover:text-gray-700">MENU</a></li>
                    <li><a href="/" className="text-black font-bold hover:text-gray-700">OURSTORY</a></li>
                    <li><a href="/" className="text-black font-bold hover:text-gray-700">FEEDBACK</a></li>
                    <li>
                        <a href="/"> 
                            <img src={lamb} alt="logo" className='w-13 pr-5' />
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;

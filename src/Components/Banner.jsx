import coverImage from '../assets/image1.jpg'
import banner from '../assets/banner.svg'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Banner = () => {
    const el = useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Backend Developer", "FrontEnd Developer", "Full Stack Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 800,
            loop: true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
    },[]);
    return(
        <>
        <div className="h-96 main-container flex items-center  shadow-2xl mt-3 mx-4" style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover'
        }}>
            <div className=' w-full flex justify-center'>
                <div className='w-2/3 ms-10'>
                    <h3 className='mt-3 text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className=' mt-3 text-5xl font-bold'>Soumik Poddar</h1>
                    <h2 className=' mt-3 text-3xl'>I am a <span className='' ref={el}></span></h2>
                    <p className='mt-3mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate 
                       dignissimos blanditiis optio autem atque maiores maxime eveniet esse pariatur?</p>
                    <div className='social-icons mt-4 flex space-x-5 text-white'>
                        <a className='hover:bg-orange-600 border cursor-pointer flex justify-center items-center h-14 w-14 rounded-full bg-gray-800'>
                            <i class="fa-brands fa-facebook text-4xl"></i>
                        </a>
                        <a className='hover:bg-orange-600 border cursor-pointer flex justify-center items-center h-14 w-14 rounded-full bg-gray-800'>
                            <i class="fa-brands fa-instagram text-4xl"></i>
                        </a>
                        <a className='hover:bg-orange-600 border cursor-pointer flex justify-center items-center h-14 w-14 rounded-full bg-gray-800'>
                            <i class="fa-brands fa-github text-4xl"></i>
                        </a>
                        <a className='hover:bg-orange-600 border cursor-pointer flex justify-center items-center h-14 w-14 rounded-full bg-gray-800'>
                            <i class="fa-brands fa-linkedin text-4xl"></i>
                        </a>    
                    </div>
                    <br/>
                    <a className='bg-orange-500 px-3 py-2 rounded-lg text-1xl shadow-lg' href="/contact">Contact me</a>
                </div>
            </div>
            
            
            <div className=' flex justify-center w-full'>
                <img className='rounded-full shadow-lg' src={coverImage}></img>
            </div>
        </div>
        </>
    );
}
export default Banner;
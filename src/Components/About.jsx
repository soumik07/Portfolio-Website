import { useState } from 'react';
import myImage from '../assets/image1.jpg'
import bannerFlip from '../assets/image11.jpg'
const About = () => {
    const[data, setdata] = useState({
        image: myImage,
        title: `Java/SpringBoot developer & ReactJS Developer`,
        desc1: `Provident culpa, eaque blanditiis ad magnam expedita, delectus quisquam magni mollitia voluptate debitis laudantium explicabo corporis veniam consequatur commodi repudiandae possimus cum.`,
        desc2: `Provident culpa, eaque blanditiis ad magnam expedita, delectus quisquam magni mollitia voluptate debitis laudantium explicabo corporis veniam consequatur commodi repudiandae possimus cum.`
    })
    return(
        <>
            <div className="main-container py-16  mx-4">
                <h1 className="text-4xl font-bold text-center pb-16">About Me</h1>
                <div className='main flex h-96 shadow-2xl' style={{backgroundImage: `url(${bannerFlip})`,backgroundSize: 'cover'}}>
                    <div className='p-6 flex justify-center utems-center w-full '>
                        <img className='rounded-full shadow-lg' src={data.image}></img>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-2/3'>
                            <h1 className='mb-3 text-3xl font-semibold'>{data.title}</h1>
                            <p className='mb-3 text-1xl'>{data.desc1}</p>
                            <p className='text-1xl mb-4'>{data.desc2}</p>
                            <div className=''><a href='/read-more' className='bg-orange-600 rounded-lg shadow-lg px-3  py-2'>Read more</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
export default About;
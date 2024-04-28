import banner from '../assets/banner.svg'
const Skills = () => {
    return(
        <>
        <div className="main-container px-4 mb-3 ">
            <h1 className="text-4xl font-bold text-center mb-6">My Skills</h1>
            <div className="flex h-96 mt-14 shadow-2xl" style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover'}}>
                <div className="flex justify-center items-center  w-full p-4 ">
                    <div className='w-2/3 space-y-5 '>
                        <p className="text-3xl font-semibold">I love these technologies</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio architecto possimus repellendus libero aperiam dolores nemo a esse dignissimos.</p>
                        <button className="bg-orange-600 px-4 py-2 rounded-lg shadow-2xl">Hire me</button> 
                    </div>                  
                </div>

                <div className="flex w-full justify-center items-center">
                        <div className='w-2/3 flex flex-wrap h-fit space-x-2 space-y-2 justify-center'>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm h-fit mt-2 ms-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">C</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full tw-fi text-sm hover:bg-orange-500 cursor-pointer">C++</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">SpringBoot</p>  
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm h-fit mt-2 ms-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">C</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full tw-fi text-sm hover:bg-orange-500 cursor-pointer">C++</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">SpringBoot</p>  
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm h-fit mt-2 ms-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">C</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full tw-fi text-sm hover:bg-orange-500 cursor-pointer">C++</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">SpringBoot</p>  
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm h-fit mt-2 ms-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">C</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full tw-fi text-sm hover:bg-orange-500 cursor-pointer">C++</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">SpringBoot</p>  
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm h-fit mt-2 ms-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">C</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full tw-fi text-sm hover:bg-orange-500 cursor-pointer">C++</p>
                            <p className="bg-gray-200 px-3 py-1 rounded-full w-fit text-sm hover:bg-orange-500 cursor-pointer">SpringBoot</p>  
                                  
                        </div>
                        
                    
                </div>
            </div>
        </div>
        </>
    );
}
export default Skills;
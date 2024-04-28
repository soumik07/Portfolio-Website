const Services = () => {
    return(
        <>
            <div className="main-container mb-10">
                <h1 className="text-4xl font-bold text-center mb-10">My Services</h1>
                <div className="service flex space-x-6 p-4 ">
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center">
                        <h2 className="text-3xl font-semibold">Web developement</h2>
                        <p>dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur cum ut earum dolores labore minus ab.</p>
                        <button className="bg-orange-600 px-5 py-2 rounded-lg">Check</button>
                    </div>
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center">
                        <h2 className="text-3xl font-semibold">Backend developement</h2>
                        <p>dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur cum ut earum dolores labore minus ab.</p>
                        <button className="bg-orange-600 px-5 py-2 rounded-lg">Check</button>
                    </div>
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center" >
                        <h2 className="text-3xl font-semibold">Frontend developement</h2>
                        <p> dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur cum ut earum dolores labore minus ab.</p>
                        <button className="bg-orange-600 px-5 py-2 rounded-lg">Check</button>
                    </div>
                </div>
            </div> 

        </>
    );
}
export default Services;
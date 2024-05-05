const Services = () => {
    return(
        <>
            <div id="projects" className="main-container mb-10">
                <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
                <div className="service flex space-x-6 p-4 ">
                    
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center">
                        <h2 className="text-3xl font-semibold">Electronic store</h2>
                        <p>dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, natus doloribus blanditiis consequuntur cum ut earum dolores labore minus ab.</p>
                        <button className="bg-orange-600 px-5 py-2 rounded-lg">Check</button>
                    </div>
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center">
                        <h2 className="text-3xl font-semibold">Smart Contact Manager</h2>
                        <p className="mb-2">Developed a responsive web application where users can save their
                            contacts and information and access it from anywhere.
                            Implemented login/signup verification using spring security.
                            Add/Update/Delete contacts using CRUD operations.Implemented RESTFUL Web APIs in backend.
                            

                        </p>
                        <div><a target="_blank" href='https://github.com/soumik07/smart-contact-manager' className="bg-orange-600 px-5 py-2 rounded-lg">Check</a></div>
                    </div>
                    <div className="hover:bg-gray-100 cursor-pointer shadow-lg p-6 space-y-3 bg-slate-200 text-center" >
                        <h2 className="text-3xl font-semibold">Pharmacy Management System</h2>
                        <p> Pharmacy Management System is a software application designed to
                            streamline and automate various processes within a pharmacy. Key
                            features include inventory management, prescription processing, sales
                            tracking, and patient information management.                           
</p>
                        <button className="bg-orange-600 px-5 py-2 rounded-lg">Check</button>
                    </div>
                </div>
            </div> 

        </>
    );
}
export default Services;
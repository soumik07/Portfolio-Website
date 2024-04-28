import { useState } from "react";

const Header = () => {
    const[brandName, setBrandName] = useState("Soumik Poddar");
    const[actionButton] = useState({
        title: "Download CV",
        link: "/download-cv"
    });
    

    const[menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/home",
            id: 1
        },
        {
            title: "About",
            link: "/sbout",
            id: 2
        },
        {
            title: "Skills",
            link: "/skills",
            id: 3
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            id: 4
        },
        {
            title: "Contacts",
            link: "/contacts",
            id: 5
        }
    ]);
    
    return(
        <>
            <div className="h-20 border items-center main flex justify-between px-16 bg-gray-200">
                <div>
                    {/*Name*/ }
                    <h1 className="text-2xl font-bold">{brandName}</h1>
                </div>
                <div className="space-x-6">
                    {/*links*/ }
                    {menuLinks.map(link=>(
                        <a key={link.id} href={link.link} className="hover:text-orange-500">{link.title}</a>
                    ))}

                    {/* <a href="/home" className="hover:text-orange-500">Home</a>
                    <a href="/about" className="hover:text-orange-500">About</a>
                    <a href="/portfolio" className="hover:text-orange-500">   Portfolio</a>
                    <a href="/skills" className="hover:text-orange-500">Skills</a>
                    <a href="/contact" className="hover:text-orange-500">Contact</a> */}
                </div>
                <div>
                    {/*Button*/ }
                    <a href={actionButton.link} className='bg-orange-600 px-2 py-2 text-white rounded-lg shadow-lg'>{actionButton.title}</a>
                </div>
            </div>
        </>
    );
}
export default Header;
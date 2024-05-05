const Footer = () => {
    return(
        <>
            <div className="h-20 flex justify-between px-40 bg-gray-200 items-center border">
                <div>
                    <p className="text-sm ">@2024 Soumik Poddar <span className="text-zinc-950 text-sm ms-6">All rights reserved</span></p>
                </div>
                <div className="space-x-4">
                    <a href="#aboutMe" className="hover:underline  text-sm cursor-pointer">About</a>
                    <a href="/privacy " className="hover:underline text-sm cursor-pointer">Privacy policy</a>
                    <a href="/license" className="hover:underline text-sm cursor-pointer">Licensing</a>
                    <a onClick={()=>{swal("Contact Details", `Phone No: +918617839176 \n Email ID: sp9091814841@gmail.com`);}} className="hover:underline text-sm cursor-pointer">Contact</a>
                </div>
            </div>
        </>
    );
}
export default Footer;
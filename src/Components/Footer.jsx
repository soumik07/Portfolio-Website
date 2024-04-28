const Footer = () => {
    return(
        <>
            <div className="h-20 flex justify-between px-40 bg-gray-200 items-center border">
                <div>
                    <p className="text-sm ">@2024 Soumik Poddar <span className="text-zinc-950 text-sm ms-6">All rights reserved</span></p>
                </div>
                <div className="space-x-4">
                    <a href="/about" className="hover:underline  text-sm font-semibold">About</a>
                    <a href="/privacy " className="hover:underline text-sm font-semibold">Privacy policy</a>
                    <a href="/license" className="hover:underline text-sm font-semibold">Licensing</a>
                    <a href="/contact" className="hover:underline text-sm font-semibold">Contact</a>
                </div>
            </div>
        </>
    );
}
export default Footer;
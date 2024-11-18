import Button from "@mui/material/Button";
import Logo from '/logo.png';

function openAndClose() {
   const drop = document.querySelector('.dropdownOption');
   if (drop) {
      drop.classList.toggle('hidden');
      drop.classList.toggle('grid');
   }
}

function Header() {
    return (
        <div className="flex bg-white justify-around gap-20 md:gap-x-96 lg:fixed lg:bg-white top-0 left-0 w-full lg:h-24 z-10">
            <img src={Logo} className="w-36 sm:w-45 md:w-45 lg:w-65 lg:absolute top-3 left-5" alt="Logo" />
            <span className="menu self-center text-tailoredOrange material-icons lg:hidden" onClick={openAndClose}>
                menu
            </span>
            
            {/* Dropdown Menu for Mobile */}
            <div className="dropdownOption hidden absolute top-12 left-5 w-11/12 bg-white border border-gray-200 rounded-lg text-black shadow-lg grid-cols-1 gap-4 p-4">
                <a href="#AboutUs">
                    <button className="font-bold uppercase text-base text-black">About</button>
                </a>
                <a href="#Service_Section">
                    <button className="font-bold uppercase text-base text-black">Services</button>
                </a>
                <a href="#Gallery">
                    <button className="font-bold uppercase text-base text-black">Gallery</button>
                </a>
                <a href="#Contact">
                    <button className="font-bold uppercase text-base text-black">Contact</button>
                </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:absolute right-5 translate-y-1/2 justify-end items-center gap-2">
                <a href="#AboutUs">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20 }}>About</Button>
                </a>
                <a href="#Service_Section">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20 }}>Services</Button>
                </a>
                <a href="#Gallery">
                    <Button variant="text" style={{ color: 'rgba(41, 37, 36, 0.9)', fontWeight: 700, fontSize: 20 }}>Gallery</Button>
                </a>
                <a href="#Contact">
                    <Button variant="contained" style={{ backgroundColor: 'rgba(221, 44, 0, 0.8)', fontWeight: 700, fontSize: 20 }}>Contact</Button>
                </a>
            </div>
        </div>
    );
}

export default Header;

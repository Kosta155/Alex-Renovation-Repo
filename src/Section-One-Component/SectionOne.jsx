import Button from "@mui/material/Button";

function SectionOne() {
    return (
        <>
            <section className="bg-sectionone-bg bg-cover bg-center h-[60vh] text-white flex flex-col items-center justify-center text-center lg:mt-24">
                <div className="section-Content flex flex-col items-center px-5 lg:px-40 pt-10 uppercase">
                    <h2 className="text-[4rem] sm:text-[5rem] lg:text-[6.7rem] font-bebas m-0 leading-none">ALEX</h2>
                    <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.7rem] font-bebas mt-0 leading-tight">HOME RENOVATIONS</h1>
                    <p className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] font-bebas mb-7 mt-2">20+ Years Serving — all across the GTA</p>
                    <Button
                        variant="contained"
                        sx={{
                            height: '70px',
                            width: '200px',
                            borderRadius: '5px',
                            backgroundColor: 'rgba(224, 88, 42, 1)',
                            color: 'white',
                            fontSize: '20px',
                            fontFamily: 'Bebas Neue, sans-serif',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.4s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                color: 'rgba(224, 88, 42, 1)'
                            },
                            // Centering style
                            mx: 'auto'
                        }}
                    >
                        CONTACT US
                    </Button>
                </div>

                <div className="hidden dropdownOption absolute bg-white transform translate-x-1/2 w-1/2 h-1/3 px-3 py-5 border-t-4 border-tailoredOrange lg:hidden">
                    <a href="#AboutUs">
                        <button className="font-bebas uppercase font-bold text-sm md:text-base">About</button> 
                    </a>
                    <a href="#Services">
                        <button className="font-bebas uppercase font-bold text-sm md:text-base">Services</button> 
                    </a>
                    <a href="#Gallery">
                        <button className="font-bebas uppercase font-bold text-sm md:text-base">Gallery</button> 
                    </a>
                    <a href="#Contact">
                        <button className="font-bebas uppercase font-bold text-sm md:text-base">Contact</button> 
                    </a>
                </div>
            </section>
        </>
    );
}

export default SectionOne;

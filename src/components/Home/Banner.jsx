import {useState, useEffect} from "react";

const imageUrls = ["https://i.ibb.co/b29Sg2k/image-removebg-preview-1.png", "https://i.ibb.co/ZNcbX3C/image-removebg-preview-2.png", "https://i.ibb.co/M21qLrV/image-removebg-preview-3.png",
    // Add more image URLs as needed
];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 2000); // Change image every 2 seconds (adjust as needed)

        return() => {
            clearInterval(interval);
        };
    }, []);

    return (<>
        <section className="px-3 py-5 bg-fuchsia-700 lg:py-10">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className="text-white order-2 lg:order-1 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold py-5">
                        Find the right job, right away
                    </h1>
                    <p className="py-2 text-lg">
                        Forget the old rules. You can have the best people. Right now.
                                      Right here.
                    </p>
                    <div className="form-control py-5">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered input-warning text-black"/>
                            <button className="btn btn-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative top-5 lg:top-10 order-2 lg:order-2 h-80 w-80  lg:w-[500px] lg:h-[500px]">
                    <img className=" h-full object-cover "
                        src={
                            imageUrls[currentImageIndex]
                        }
                        alt=""/>
                </div>
            </div>
        </section>
    </>);
};

export default Banner;

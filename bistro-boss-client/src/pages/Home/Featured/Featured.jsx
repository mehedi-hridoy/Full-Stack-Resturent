import React, { useRef, useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';

const Featured = () => {
    const bgRef = useRef(null);
    const rafRef = useRef(null);
    const [bgY, setBgY] = useState(0);

    useEffect(() => {
        const el = bgRef.current;
        if (!el) return;

        let ticking = false;

        function update() {
            const rect = el.getBoundingClientRect();
            
            const speed = 0.25; // Adjust this value to control parallax speed
            const value = -rect.top * speed;
            setBgY(value);
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                rafRef.current = requestAnimationFrame(update);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        // initial
        update();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section className="relative overflow-hidden">
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />

            <div
                ref={bgRef}
                className="mt-8 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${featuredImage})`, backgroundPosition: `center ${bgY}px` }}
            >
                {/* overlay */}
                <div className="bg-black/60">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* left framed image */}
                            <div className="flex justify-center md:justify-start">
                                <div className="w-[520px] md:w-[520px] shadow-xl bg-white">
                                    <img src={featuredImage} alt="featured dish" className="w-full h-auto block" />
                                </div>
                            </div>

                            {/* right content */}
                            <div className="text-white max-w-xl md:pl-10">
                                <p className="text-sm text-yellow-400 mb-4">March 20, 2023</p>
                                <h3 className="text-3xl md:text-4xl font-semibold uppercase mb-4">Where can I get some?</h3>
                                <p className="text-gray-200 leading-relaxed">
                                    At Bistro Boss we invite you to discover cuisine that balances comfort with refinement. Our chef curates a seasonal menu
                                    that highlights local produce and time-honored techniques, delivering plates that are bold in flavor yet elegantly presented.
                                    Whether you're joining us for a celebratory dinner or a casual lunch, expect warm hospitality, thoughtful pairings, and
                                    dishes designed to be shared and remembered.
                                </p>

                                <div className="mt-8">
                                    <a href="#" className="inline-block text-white font-semibold">READ MORE</a>
                                    <div className="w-24 h-0.5 bg-white mt-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
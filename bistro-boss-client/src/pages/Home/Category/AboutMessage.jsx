import React from 'react';
import chefImg from '../../../assets/home/chef-service.jpg';

const AboutMessage = () => {
    return (
        <section
            className="w-full bg-center bg-no-repeat bg-cover py-16 mb-12"
            style={{ backgroundImage: `url(${chefImg})` }}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white/100 shadow-sm py-12 px-10">
                    <h2 className="text-4xl md:text-5xl text-center font-serif tracking-wide mb-6">Bistro Boss</h2>
                    <p className="text-center text-gray-700 max-w-3xl mx-auto leading-7">
                        At Bistro Boss we craft every dish with the kind of care you find in a family recipe and the precision of a chef's touch. Our menu celebrates
                        seasonal ingredients sourced from local farmers, paired with thoughtful techniques that elevate simple flavors into memorable plates.
                        Whether you join us for a relaxed lunch or an intimate dinner, expect warm hospitality, beautifully plated food, and moments that invite you
                        to savor the company as much as the cuisine.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMessage;
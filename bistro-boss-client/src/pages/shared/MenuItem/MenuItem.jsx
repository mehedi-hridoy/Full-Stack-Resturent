import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div className="flex items-start gap-6 px-2 md:px-6 mb-16">
            {/* left image / shape */}
            <div className="w-20 h-20 rounded-tr-[50%] rounded-br-[50%] bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
                <div className="flex items-center">
                    <h4 className="font-serif text-lg tracking-wider uppercase mr-3">{name}</h4>
                    <div className="flex-1 border-b border-dashed border-gray-300 opacity-60" />
                    <div className="ml-4 text-yellow-600 font-medium">${price}</div>
                </div>
                <p className="text-gray-500 mt-3 max-w-xl">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
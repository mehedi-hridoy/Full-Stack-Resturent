import React from 'react';

// Contract
// props.item = { _id, image, price, name, recipe }
// Renders a card with image, top-right price badge, title, description and an Add to Cart button

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item || {};

  return (
    <div className="bg-white overflow-hidden flex flex-col shadow-sm">
      {/* Image with price badge */}
      <div className="relative h-56 md:h-60 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-slate-900 text-white text-sm font-semibold px-3 py-1 rounded shadow">
          ${price}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-gray-50 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-center mb-3">{name}</h3>
        <p className="text-gray-600 text-sm text-center leading-relaxed flex-1">{recipe}</p>

        <div className="mt-6 flex justify-center">
          <button
            className="
              inline-flex items-center justify-center cursor-pointer
              px-8 h-12 rounded-md
              bg-gray-100 text-yellow-700
              border-0 border-b-4 border-yellow-600
              shadow-sm
              transition-colors duration-200
              hover:bg-slate-900 hover:text-yellow-400
            "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

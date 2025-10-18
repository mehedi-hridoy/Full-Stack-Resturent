import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefCard = ({ item }) => {
    return (
        <div className="bg-white shadow-sm h-full flex flex-col overflow-hidden">
            <div className="w-full h-56 md:h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover block" />
            </div>

            <div className="p-6 bg-gray-50 text-center flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-6">{item.recipe}</p>
                </div>

                <div className="mt-4">
                    <button className="px-6 py-3 bg-white border border-yellow-500 text-yellow-700 rounded-md shadow-md hover:bg-yellow-50 transition">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

const ChefRecomendatino = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                // choose first 6 popular items; fallback to first 6 if not enough
                const popular = data.filter(i => i.category === 'popular');
                const list = (popular.length ? popular : data).slice(0, 6);
                setItems(list);
            })
            .catch(err => console.error('Failed to load menu.json', err));
    }, []);

    return (
        <section className="py-12">
            <div className="max-w-screen-2xl mx-auto px-6">
                <SectionTitle subHeading={'---Should Try---'} heading={'CHEF RECOMMENDS'} />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map(item => (
                        <ChefCard key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChefRecomendatino;
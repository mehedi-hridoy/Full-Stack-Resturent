import React, { useEffect, useState, useRef } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./order-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Order = () => {
  // pagination variable intentionally removed - using custom controls below
  const [menu, loading] = useMenu();
  const navigate = useNavigate();
  const { category } = useParams();

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const safeCategory = (category || "salad").toLowerCase();
  const initialIndex = Math.max(0, categories.indexOf(safeCategory));
  const [tabIndex, setTabIndex] = useState(initialIndex);

  useEffect(() => {
    setTabIndex(initialIndex);
  }, [category, initialIndex]);
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const chunk = (arr, size) => {
    const pages = [];
    for (let i = 0; i < arr.length; i += size) pages.push(arr.slice(i, i + size));
    return pages;
  };

  const SALAD_PAGES = chunk(salad, 8);
  const PIZZA_PAGES = chunk(pizza, 8);
  const SOUP_PAGES = chunk(soup, 8);
  const DESSERT_PAGES = chunk(desserts, 8);
  const DRINKS_PAGES = chunk(drinks, 8);

  const PaginatedSwiper = ({ pages }) => {
    const swiperRef = useRef(null);
    const [current, setCurrent] = useState(1);
    const total = pages.length || 1;

    return (
      <div>
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setCurrent(s.activeIndex + 1)}
          slidesPerView={1}
          className="mySwiper"
        >
          {pages.map((pageItems, pIndex) => (
            <SwiperSlide key={pIndex}>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pageItems.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom controls: prev, counter, next, bullets */}
        <div className="flex items-center gap-4 mt-6">
          <button
            className="control-btn prev-btn"
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            aria-label="Previous page"
          >
            <span className="arrow">‹</span>
          </button>

          <div className="text-sm">{current} / {total}</div>

          <button
            className="control-btn next-btn"
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            aria-label="Next page"
          >
            <span className="arrow">›</span>
          </button>

          <div className="flex-1" />

          <div className="flex gap-3">
            {pages.map((_, i) => (
              <button
                key={i}
                className={`bullet ${i + 1 === current ? 'bullet-active' : ''}`}
                onClick={() => swiperRef.current && swiperRef.current.slideTo(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderImg} title={"Order Food"}></Cover>

      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            const next = categories[index] || categories[0];
            navigate(`/order/${next}`);
          }}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            {loading ? (
              <div className="py-12 text-center">Loading...</div>
            ) : salad.length ? (
              SALAD_PAGES.length > 1 ? (
                <PaginatedSwiper pages={SALAD_PAGES} />
              ) : (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {salad.map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              )
            ) : (
              <div className="py-12 text-center text-gray-500">
                No salad items available.
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="py-12 text-center">Loading...</div>
            ) : pizza.length ? (
              PIZZA_PAGES.length > 1 ? (
                <PaginatedSwiper pages={PIZZA_PAGES} />
              ) : (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pizza.map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              )
            ) : (
              <div className="py-12 text-center text-gray-500">
                No pizza items available.
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="py-12 text-center">Loading...</div>
            ) : soup.length ? (
              SOUP_PAGES.length > 1 ? (
                <PaginatedSwiper pages={SOUP_PAGES} />
              ) : (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {soup.map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              )
            ) : (
              <div className="py-12 text-center text-gray-500">
                No soup items available.
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="py-12 text-center">Loading...</div>
            ) : desserts.length ? (
              DESSERT_PAGES.length > 1 ? (
                <PaginatedSwiper pages={DESSERT_PAGES} />
              ) : (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {desserts.map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              )
            ) : (
              <div className="py-12 text-center text-gray-500">
                No dessert items available.
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="py-12 text-center">Loading...</div>
            ) : drinks.length ? (
              DRINKS_PAGES.length > 1 ? (
                <PaginatedSwiper pages={DRINKS_PAGES} />
              ) : (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {drinks.map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              )
            ) : (
              <div className="py-12 text-center text-gray-500">
                No drinks items available.
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;

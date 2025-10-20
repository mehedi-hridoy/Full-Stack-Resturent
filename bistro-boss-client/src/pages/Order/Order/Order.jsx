import React, { useEffect, useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "./order-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const [menu, loading] = useMenu();
  const navigate = useNavigate();
  const { category } = useParams();

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const safeCategory = (category || "salad").toLowerCase();
  const initialIndex = Math.max(0, categories.indexOf(safeCategory));
  const [tabIndex, setTabIndex] = useState(initialIndex);

  useEffect(() => {
    setTabIndex(initialIndex);
  }, [category]);
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
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
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {salad.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
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
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pizza.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
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
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {soup.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
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
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {desserts.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
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
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drinks.map((item) => (
                  <FoodCard key={item._id} item={item} />
                ))}
              </div>
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

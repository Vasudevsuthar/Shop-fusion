import { useContext } from "react";
import Card from "./Card";
import "./Card.css";
import MainContext from "../store/main-context";

const productData = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 15,
    image:
      "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 150,
    trendingProductName: "Exclusive",
    quantity: 1,
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
    title: "Kaushalam kalash Copper Pot",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Fashion",
    quantity: 1,
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 130,
    trendingProductName: "Fashion",
    quantity: 1,
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Fashion",
    quantity: 1,
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Fashion",
    quantity: 1,
  },
  {
    id: 10,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Fashion",
    quantity: 1,
  },
  {
    id: 11,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 12,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 13,
    image:
      "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
    price: 120,
    trendingProductName: "Featured",
    quantity: 1,
  },
];

const HomePageProductcard = () => {
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  console.log(prodData);
  const exclusiveProduct = prodData.filter(
    (product) => product.specificCategorie === "Exclusive Products"
  );
  const fashionProduct = prodData.filter(
    (product) => product.tspecificCategorie === "Fashion Products"
  );
  const featuredProduct = prodData.filter(
    (product) => product.specificCategorie === "Featured Products"
  );

  return (
    <>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Exclusive Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {exclusiveProduct.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Fashion Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {fashionProduct.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-card-container">
        <div>
          <h3 className="product-heading">Featured Products</h3>
          <hr />
        </div>
        <div className="product-card">
          <div>
            {featuredProduct.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageProductcard;

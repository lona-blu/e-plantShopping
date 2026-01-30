import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plantsData = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 120, image: "/assets/snake.jpg" },
      { id: 2, name: "Monstera", price: 200, image: "/assets/monstera.jpg" },
      { id: 3, name: "Peace Lily", price: 150, image: "/assets/lily.jpg" },
      { id: 4, name: "Fiddle Leaf Fig", price: 300, image: "/assets/fig.jpg" },
      { id: 5, name: "Spider Plant", price: 90, image: "/assets/spider.jpg" },
      { id: 6, name: "Rubber Plant", price: 180, image: "/assets/rubber.jpg" },
    ],
  },

  {
    category: "Succulents",
    items: [
      { id: 7, name: "Aloe Vera", price: 80, image: "/assets/aloe.jpg" },
      { id: 8, name: "Jade Plant", price: 100, image: "/assets/jade.jpg" },
      { id: 9, name: "Echeveria", price: 70, image: "/assets/echeveria.jpg" },
      { id: 10, name: "Zebra Haworthia", price: 85, image: "/assets/zebra.jpg" },
      { id: 11, name: "Burro’s Tail", price: 95, image: "/assets/burro.jpg" },
      { id: 12, name: "Panda Plant", price: 110, image: "/assets/panda.jpg" },
    ],
  },

  {
    category: "Outdoor Plants",
    items: [
      { id: 13, name: "Lavender", price: 140, image: "/assets/lavender.jpg" },
      { id: 14, name: "Rose Bush", price: 220, image: "/assets/rose.jpg" },
      { id: 15, name: "Hydrangea", price: 250, image: "/assets/hydrangea.jpg" },
      { id: 16, name: "Bamboo Palm", price: 190, image: "/assets/bamboo.jpg" },
      { id: 17, name: "Gardenia", price: 210, image: "/assets/gardenia.jpg" },
      { id: 18, name: "Hibiscus", price: 230, image: "/assets/hibiscus.jpg" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.find((item) => item.id === id);

  return (
    <div className="product-list">
      {plantsData.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div className="products-grid">
            {group.items.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>R{plant.price}</p>

                <button
                  disabled={isInCart(plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


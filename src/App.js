import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

//Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  console.log(ProductContext);

  const addItem = (item) => {
    // console.log(item) do dis first
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <Navigation />
        {/* Routes */}
        <ProductContext.Provider value={{ products, addItem }}>
          <Route exact path='/'>
            {/* <Products products={products} addItem={addItem} /> */}
            <Products />
          </Route>
        </ProductContext.Provider>

        <Route path='/cart'>
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;

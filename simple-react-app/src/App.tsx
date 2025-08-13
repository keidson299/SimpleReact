import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Bangkok",
    "Sao Paulo",
  ];

  const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  const handleToppingChange = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div>
      <Form />
      {/*
      <ExpandableText>Hello Everybody</ExpandableText>

             <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}></Alert>
      )}
      <Button onButtonClick={() => setAlertVisibility(true)}></Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Like onLikeClick={() => console.log("clicked")} /> */}
    </div>
  );
}

export default App;

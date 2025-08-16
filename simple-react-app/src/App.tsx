import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expenseTracker/components/ExpenseList";
import ExpenseFilter from "./expenseTracker/components/ExpenseFilter";
import ExpenseForm from "./expenseTracker/components/ExpenseForm";
import categories from "./expenseTracker/categories";

function App() {
  /*   let items = [
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
  }; */

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCatagory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
      {/*<Form />
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

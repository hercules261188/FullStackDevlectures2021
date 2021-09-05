import "./App.css";
import "tailwindcss/dist/tailwind.css";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <FoodItems />
    </div>
  );
}

export default App;

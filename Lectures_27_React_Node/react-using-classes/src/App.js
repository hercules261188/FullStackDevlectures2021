import "./App.css";
import Header from "./components/Header";
import HeaderUsingClasses from "./components/HeaderUsingClasses";
function App() {
  return (
    <div className="App">
      <Header siteTitle={"User Details"} />
      <HeaderUsingClasses siteTitle={"User Details"} />
    </div>
  );
}

export default App;

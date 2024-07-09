import { Component } from "react";
import "./App.css";

import { Provider } from "mobx-react";

import GroceryStore from "./store/grocery.store";
import Add from "./components/add.component";
import GroceriesList from "./components/groceriesList.component";

const groceryStore = new GroceryStore();

class App extends Component {
  render() {
    return (
      <Provider groceryStore={groceryStore}>
        <div className="App">
          <Add />
          <GroceriesList />
        </div>
      </Provider>
    );
  }
}

export default App;

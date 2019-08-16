import React, { Fragment, Component } from "react";
import "./App.css";
import "tachyons";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import HouseButton from "./components/HouseButton";
import CardList from "./components/CardList";
import House from "./components/House";

import SearchBox from "./components/SearchBox";
import About from "./pages/About";

import Characters from "./components/Characters/Characters";
import Books from "./components/Books/Books";

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      searchfield: "",
      house: {},
      overlord: {},
      region: ""
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50&region=${
        this.state.region
      }`
    );
    this.setState({ houses: res.data });
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  // get a single House
  getHouse = async name => {
    const res = await axios.get(
      `https://www.anapioficeandfire.com/api/houses?name=${name}`
    );
    this.setState({ house: res.data[0] });
  };

  //get houses
  getHouses = e => {
    this.setState({ region: e.target.value }, function() {
      console.log(this.state.region);
      this.changeRegion();
    });
  };

  changeRegion = async () => {
    const res = await axios.get(
      `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50&region=${
        this.state.region
      }`
    );
    this.setState({
      houses: res.data
    });
  };

  clearHouseData = () => {
    this.setState({
      house: {}
    });
  };

  render() {
    const filteredHouses = this.state.houses.filter(house => {
      return house.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <Router>
        <div className="App">
          <Navbar clearHouseData={this.clearHouseData} />
          <div>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchBox searchChange={this.onSearchChange} />
                    <HouseButton
                      getHouses={this.getHouses}
                      region={this.state.region}
                      changeRegion={this.changeRegion}
                    />
                    <CardList houses={filteredHouses} />
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />
              <Route exact path="/characters" component={Characters} />
              <Route exact path="/books" component={Books} />
              <Route
                exact
                path="/house/:name"
                render={props => (
                  <House
                    {...props}
                    getHouse={this.getHouse}
                    house={this.state.house}
                    color={this.state.color}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

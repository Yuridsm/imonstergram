import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import { api } from './api/api.js';

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: ''
      }
   }

   async componentDidMount() {
      const response = await api.get('');
      this.setState({ monsters: response.data });
   }

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
            <div className="App">
               <header>
                  <h1>iMonstergram</h1>
               </header>

               <SearchBox
                  placeholder="Search monster"
                  handleChange={e => this.setState({ searchField: e.target.value })}
               />

               <CardList monsters={ filteredMonsters } />
            </div>
      );
  }
}

export default App;

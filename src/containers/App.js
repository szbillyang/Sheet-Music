import React, { Component } from 'react';
import CardList from '../components/CardList'
import { sheets } from '../sheets'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            sheets: sheets,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { sheets, searchfield } = this.state;
        const filteredSheets = sheets.filter(sheet =>{
          return (
            sheet.name.toLowerCase().includes(searchfield.toLowerCase()) ||
            sheet.instrument.toLowerCase().includes(searchfield.toLowerCase())
          )
        })

        return !sheets.length ?
          <h1>Loading</h1> :
          (
            <div className='tc'>
              <h1 className='f1'>Sheet Music</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList sheets={filteredSheets} />
              </Scroll>
            </div>
          );
    }
}

export default App;
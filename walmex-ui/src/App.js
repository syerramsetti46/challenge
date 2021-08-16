
import { lightblue } from 'color-name';
import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import UsersCountAgesPerItem from './components/UsersCountAgesPerItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false
    }
  }

  componentDidMount() {
    this.props.fecthAllUsers();
  }
  itemSelectionChange = (e) => {
    //this.props.fecthAllAgesWithUsersCount(e.value)
    const selectElement = e.target;
    const selectedVal = selectElement.value;
    if (selectedVal !== "")
      this.setState({ ...this.state, showResults: true },async()=>{
        await this.props.fecthAllAgesWithUsersCount(selectedVal);
      });

    else
      this.setState({ ...this.state, showResults: false });

  }
  render() {

    // instead of hardcoding API call can be done
    const items = ['carrot', 'apple', 'grapes', 'cake', 'crackers', 'chips', 'tv', 'ham', 'beef']
    return (
      <div className="App">
        <h1>All Users</h1>
        <h3>Users and their age</h3>
        <Users data={this.props.usersDTO} />
        <h1>Age Demographic of Users with _______</h1>
        <select id="items" name="itemList" onChange={this.itemSelectionChange} style={{width:"100px",height:"30px",backgroundColor:lightblue}}>
          <option value="">items</option>
          {items.map((item, i) => {
            return (<option key={i} value={item}>{item}</option>)
          })}
        </select>
          <div style={{padding:"20px"}}></div>

        {this.state.showResults?(<UsersCountAgesPerItem data={this.props.allAgesUsersCountDTO}/>):''}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/navbar';
// import Counters from './components/counters';
// import Counter from './components/counter';
import Movies from './components/movies'
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 ,isDisabled : true},
      { id: 2, value: 0,isDisabled : true },
      { id: 3, value: 0,isDisabled : true },
      { id: 4, value: 0 ,isDisabled : true}

    ],
  }

  handleIncrement = (counter) => {
    console.log(this.state.isDisabled);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    if(counters[index].value === 0){
      counters[index].isDisabled = true;
    }else {
      counters[index].isDisabled = false;
    }
    this.setState({ counters });
    console.log(counters);
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if(counters[index].value === 0){
      counters[index].isDisabled = true;
    }else {
      counters[index].isDisabled = false;
    }
    this.setState({ counters });
   
  }

  onReset = () => {
    let counters = [...this.state.counters];
    counters = counters.map(c => { c.value = 0; return c; });
    this.setState({ counters });
    console.log(counters);


  }
  handleDelete = (counter) => {
    let counters = [...this.state.counters];
    counters = counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
    console.log("Deleted", counters);
  }
  render() {
    return (
      // <React.Fragment>
      //   <Navbar totalCount={this.state.counters.filter(c=>c.value>0).length}/>
      //   <Counters handleDelete={this.handleDelete} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} onReset={this.onReset} counters={this.state.counters} />
      // </React.Fragment>
    <Movies/>  
      
      );




















































































  }
}

export default App;



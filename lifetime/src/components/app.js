import { Component } from 'react';
import '../styles/app.css'
import NavBar from './navbar';

class App extends Component {
  render() { 
    return (
    <>
    <div className ="main">
     <NavBar/>
    </div>
    </>)
  }
}
 
export default App;
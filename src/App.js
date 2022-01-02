import logo from './logo.svg';
import './App.css';
import ExpneseItem from './components/Expense';
import Inner from './components/Body';
import {CardList} from './components/cardlist.component';


function App() {
  return (
    // <div className="App" > 
    <div >
      <header className='App'>
      <ExpneseItem/>
      </header>
    <div >
    <h1 className='Chalo'>Hey Filter the Monsters</h1>
      <Inner/>  
       </div>
    </div>
    // </div>


  );
}

export default App;

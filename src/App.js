import './App.css';
import Header from './Component/header';
import Balance from './Component/Balance';
import Tranjention from './Component/Tranjention'
import AddNewTranjention from './Component/AddNewTranjention';
import {GlobalProvider} from './Context/GlobalState'


// // 
//   Expence Tracker  App By Traversy Media 
// it's Coool But I can't understand the add new and plus minus property



function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Tranjention  />
        <AddNewTranjention />
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

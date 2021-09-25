import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';




function App() {
  let [searchText, setSearchTextCount] = useState("");
  return (
    <div className="App">
      <h1>Welcome to dict App</h1>
      <div>
        <input type="text" name="searchWord"></input>
        <button>search</button>
        <p className="word"></p>
      </div>
    </div>
  );
}

export default App;

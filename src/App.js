import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';




function App() {
  let [searchText, setSearchTextCount] = useState("");
  let onChangeText = (event) => {
    setSearchTextCount(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <h1>Welcome to dict App {searchText}</h1>
      <div>
        <input onChange={onChangeText} type="text" name="searchWord"></input>
        <button>search</button>
        <p className="word"></p>
      </div>
    </div>
  );
}

export default App;

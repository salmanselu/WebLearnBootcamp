import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';




function App() {
  let [searchText, setSearchTextCount] = useState("");

  let baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  let onChangeText = (event) => {
    setSearchTextCount(event.target.value)
    console.log(event.target.value)
  }

    let onSubmit = () =>  {
      console.log("button click");
      fetch(`${baseURL}/term`)
      .then(response => response.json())
      .then(data => console.log(data))
    }

  return (
    <div className="App">
      <h1 style={{color: searchText===""?"red":"black"}}>Welcome to dict App {searchText}</h1>
      <div>
        <input onChange={onChangeText} type="text" name="searchWord"></input>
        <button onClick={onSubmit}>search</button>
        {searchText === "" ?
         <p>Please type something here</p>
         :
         <p className="word">{searchText}</p>
      }
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Components/Home'
import { useState, useEffect } from 'react';


function App() {
  const [search, setSearch] = useState('');
  const [report, setReport] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null)

  

  
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`;
  


  const fetctWeather = async (url) => {
    try {
      const response = await fetch (url);
      if(!response.ok) {
        throw new Error ('Request failed');
      }
      const data = await response.json();
      setReport(data)
      setSearch('')
      console.log(data)
    }
    catch (err) {
      console.log(err);
    }
  }

  function searchLocation (event) {
    if (event.keyCode === 13) {
      if (!search) {
        setError('please enter a city or check your internet connection...')
      } else {
        setError(null)
      }
      setButtonClicked(prevButtonClicked => !prevButtonClicked)
    }
  }
  function handleClick () {
    if (!search) {
      setError('please enter a city or check your internet connection...')
    } else {
      setError(null)
    }
    setButtonClicked(prevButtonClicked => !prevButtonClicked)
  }
  

  useEffect(()=>{
      fetctWeather(API_URL);
  }, [buttonClicked])
  
  

  return (
    <div className="App">
      <Home 
        search = {search}
        setSearch = {setSearch}
        report = {report}
        setReport = {setReport}
        searchLocation = {searchLocation}
        handleClick = {handleClick}
        error={error}
      />
      <h1>{search}</h1>
    </div>
  );
}

export default App;
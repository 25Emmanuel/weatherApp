import { BsCloudsFill } from 'react-icons/bs';
import { MdSunny } from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BsCloudLightningRainFill } from 'react-icons/bs';
import { BsFillCloudFog2Fill } from 'react-icons/bs';
import { MdOutlineAir } from 'react-icons/md'

const Today = ( {search, setSearch, searchLocation, handleClick, report, error } ) => {
  
  let iconStyle;

  if (report) {
    switch (report.weather[0].main) {
      case 'Rain':
        iconStyle = <BsCloudLightningRainFill className='weather-icon'/>;
        break;
      case 'Clear':
        iconStyle = <MdSunny className='weather-icon'/>;
        break;
      case 'Snow':
        iconStyle = <BsSnow className='weather-icon'/>;
        break;
      case 'Sunny':
        iconStyle = <MdSunny className='weather-icon'/>;
        break;
      case 'Fog':
        iconStyle = <BsFillCloudFog2Fill className='weather-icon'/>;
        break;
      case 'Clouds':
        iconStyle = <BsCloudsFill className='weather-icon'/>
        break;
        default:
          iconStyle = <MdOutlineAir className='weather-icon'/>;
    }
  } else {
    iconStyle = <MdOutlineAir className='weather-icon'/>;
  }

  let background = report ? report.weather[0].main : 'default';
  return (
    <div className={background}>
        <div className='input-container'>
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type='text' 
                    placeholder='enter city' 
                    className='search' 
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={searchLocation}
                />
            <input className='search-btn' type='submit' onClick={handleClick}/>
            </form>
            

        </div>
      {iconStyle}
      {error ? <p style={{color:'red', fontWeight:'600'}}>{error}</p> : null}
      <h3 className='today-temperature'>{report ? `${Math.trunc(report.main.temp)}\u00b0c` : 'Enter a city...'} </h3>
      <h3 className='location'>{report ? report.name : null}</h3>
      <h3 className='weather-text'>{report ? report.weather[0].main : null}</h3>
    </div>
  )
}

export default Today
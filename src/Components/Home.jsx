import Today from './Today'
import Detail from './Detail'

const Home = ( {search, setSearch, report, setReport, searchLocation, handleClick, error } ) => {
  return (
        <main className='container'>
        <Today 
            search = {search}
            setSearch = {setSearch}
            searchLocation = {searchLocation}
            handleClick = {handleClick}
            report = {report}
            setReport = {setReport}
            error= {error}
        />
        {/* {search} */}
        
        <Detail 
            report = {report}
        />
        </main >
    )
}

export default Home
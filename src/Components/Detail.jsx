const Detail = ( {report} ) => {
    return (
      
        <div className='details-container'>
            <div className='detail-card'>
                <h1 className='details-head'>Feels Like</h1>
                <h3 className='details-value'>{report ? `${Math.trunc(report.main.feels_like)}\u00b0c` : '--'}</h3>
            </div>
            <div className='detail-card'>
                <h1 className='details-head'>Humidity</h1>
                <h3 className='details-value'>{report ? `${Math.trunc(report.main.humidity)}%` : '--'}</h3>
            </div>
            <div className='detail-card'>
                <h1 className='details-head'>Wind Speed</h1>
                <h3 className='details-value'>{report ? `${Math.trunc(report.wind.speed)}m/s` : '--'}</h3>
            </div>
            <div className='detail-card'>
                <h1 className='details-head'>Max Temp</h1>
                <h3 className='details-value'>{report ? `${Math.trunc(report.main.temp_max)}\u00b0c` : '--'}</h3>
            </div>
            <div className='detail-card'>
                <h1 className='details-head'>Min Temp</h1>
                <h3 className='details-value'>{report ? `${Math.trunc(report.main.temp_min)}\u00b0c` : '--'}</h3>
            </div>
          
        </div>
    )
}
  
export default Detail
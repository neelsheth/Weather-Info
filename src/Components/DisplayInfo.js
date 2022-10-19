import React from 'react'
import "./display.css"
export default function DisplayInfo(props) {
    const datetime = props.res.location.localtime;
    const date = datetime.split(' ')[0]
    const time = datetime.split(' ')[1]




    return (
        <div>
            <div className='center'>
                {console.log(props.res)}
                <div className='C1'>


                    <div className='first'>
                        <div>{props.res.current.temperature} °C</div>
                        <div>{props.res.current.weather_descriptions[0]}</div>
                        <img className='small' src={props.res.current.weather_icons[0]}></img>
                    </div>

                    <div className='second'>

                        <div className='c2'>
                            <div className='small'>{props.res.location.name}</div>
                            <div className='small'>{props.res.location.country}</div>
                            <div className='small'>{date}</div>
                            <div className='small'>{time}</div>
                        </div>

                        <div className='c2'>
                            <div className='small'> Humidity : {props.res.current.humidity} %</div>
                            <div className='small'> Wind Speed : {props.res.current.wind_speed} km/h </div>
                            <div className='small'> Pressure : {props.res.current.pressure} mbar</div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

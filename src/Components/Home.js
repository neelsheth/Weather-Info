import axios from 'axios'
import React, { useRef, useState } from 'react'
import DisplayInfo from './DisplayInfo'

export default function Home() {
    const inputRef = useRef()
    const [data, setData] = useState(null)
    const[error,setError] = useState(false)

    const serch = () => {
        const input = inputRef.current.value
        console.log(input)
        setError(false);

        axios.get(`http://api.weatherstack.com/current?access_key=3749f85c1f5c1e43eafd3bf8c87b7630&query=${input}`)
            .then((res) => {
                console.log(res);
                if(res.data.error){
                    console.log("error")
                    setError(true)
                }
                else{
                    setData(res);
                }
            })
    }



    return (
        <div className='box'>
            <input ref={inputRef}></input>
            <button onClick={serch}>Serch</button>
            {error && <h1>Not a valid search input..</h1>}
            {data !== null && <DisplayInfo res={data.data}></DisplayInfo>}
        </div>
    )
}

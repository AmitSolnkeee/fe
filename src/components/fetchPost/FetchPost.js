import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'

const FetchPost = () => {
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get('https://mern-blog-api-v1.herokuapp.com/api/posts').then(response =>{
            setstate(response.data)
           
        })
    }, [])
    return (
       <>
       {console.log(state)}
         {state.map(elm => {
             return  <div>
             <div className="m-4 p-4 bg-gray-800">
                <h1 className="p-2 m-2 bg-black-400 font-semibold tracking-wide font-serif text-gray-100 text-2xl">{elm.title}</h1>
                <div className="m-4 p-6 bg-yellow-300">
                    <h3 className="m-1 text-gray-800 text-xl ">{elm.description}</h3>
                </div>
                <p className="m-4 text-opacity-30 text-gray-100">Posted on : {elm.createdAt}</p>
             </div>
          </div>
         })}
       </>
    )
}

export default FetchPost
 

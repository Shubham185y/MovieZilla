import react, {useState, useEffect} from 'react'
import ReactStars from 'react-stars'
import {getDocs} from 'firebase/firestore'
import { moviesRef } from '../Firebase/firebase.js'
import { Link } from 'react-router-dom'

const Cards = () => {
    const [loading, setLoading] = useState(false);
    const[data, setData]= useState([])
    useEffect(()=>{
        async function getData(){
            setLoading(true);
            const _data = await getDocs(moviesRef)
            _data.forEach((doc) =>{
                setData((prv)=>[...prv, {...(doc.data()), id:doc.id}])
            })
            setLoading(false)
        }
        getData();
    },[])
  return (
    <div className='flex flex-wrap justify-center p-3 mt-2'>
    {data.map((e,i) => {
        return(
    <Link to={`/Details/${e.id}`}><div key={i} className='bg-gray-200 font-bold p-4 shadow-xl rounded-lg m-4 hover:-translate-y-3 transition-all duration-500'>
        <img className='h-60  md:h-72 w-full justify-center' src={e.img}/>
        <h1 className='pt-3 pl-3'>
        <h1><span className='prop'></span>{e.tittle}</h1>
        <h1 className="flex items-center">
              <span className="text-gray-500 mr-1">Rating:</span>
              <ReactStars
                size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
              />
            </h1>
        <h1><span className='prop'>Year: </span> {e.year}</h1>  
        </h1>
    </div>
    </Link>
        );
    })}
    </div>
  )
}

export default Cards;
import React, { useContext, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../Firebase/firebase';
import swal from 'sweetalert'
import { async } from '@firebase/util';
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";
const AddMovie = () => {
  const useAppstate = useContext(Appstate)
  const navigate = useNavigate();
const [form, setform] = useState([
    {
        tittle:"",
        year:"",
        description:""
    }
]);

  const [loading, setLoading] = useState(false);

const addMovie = async() => {
  setLoading(true);
  try {
    if(useAppstate.login) {
    await addDoc(moviesRef,form);
    setLoading(true)
    swal({
        title:"Successfully added",
        icon:"success",
        buttons:false,
        timer:3000
    })
    setform({
      title: "",
      year: "",
      description: "",
      image: ""
    })
  } else {
    navigate('/login')
  }
} catch(err) {
  swal({
    title: err,
    icon: "error",
    buttons: false,
    timer: 3000
  })
}
    setLoading(false)
}


  return (
    <div>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ADD Movie</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="name" name="name"
                value={form.tittle}
                autocomplete="off"
                onChange={(e)=> setform({...form, tittle:e.target.value})}
             class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Year</label>
            <input type="email" id="email" name="email" 
                value={form.year}
                autocomplete="off"
                onChange={(e)=> setform({...form, year:e.target.value})}
             class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Poster Img URL</label>
            <input type="text" id="img" name="img" 
                value={form.img}
                autocomplete="off"
                onChange={(e)=> setform({...form, img:e.target.value})}
             class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="message" name="message" 
                 value={form.description}
                onChange={(e)=> setform({...form, description:e.target.value})}
             class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={addMovie} class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition-all duration-300">{loading?<TailSpin height={25} color='white'/>:'Submit'}</button>
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AddMovie

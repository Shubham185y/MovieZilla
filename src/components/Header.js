import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { Appstate } from '../App';
const Header = () => {
  const useAppState = useContext(Appstate)
  return (

    <div className='text-3xl z-10  sticky top-0 font-bold p-5 border-b-2 border-gray flex justify-between bg-teal-100'>
    <Link to={'/'} ><h1><span className='text-red-600'>Movie</span>Zilla</h1> </Link>
    {useAppState.login ? 
    <Link to={'/addmovie'}><Button><AddIcon className='mr-1 ' color='secondary' /><span className='text-black' >Add New</span></Button></Link>
    :
    <Link to={'/login'}><h1 className='text-lg bg-green-500 cursor-pointer flex items-center'>
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
      }</div>
  )
}

export default Header
import React from 'react';
import {useState, useContext} from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';
import {searchUsers} from '../context/github/GithubAction';
function UserSearch() {
    const {users,  dispatch} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === ''){
            setAlert('Enter something to search', 'error');
            console.log('Control here');
        }else{
            dispatch({type: 'SET_LOADING'}); 
            const users = await searchUsers(text);
            dispatch({
            type: 'GET_USERS',
            payload: users
            })
            setText('');
        }
    }
    const clearSearch = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <div className='relative'>
                        <input  type='text' className='w-full pr-40 bg-gray-300 input input-lg text-black' value={text} onChange={handleChange} placeholder='Search' />
                        <button 
                        className='btn absolute top-0 right-0 rounded-l-none w-36 btn-lg' 
                        type='submit'
                        >
                        Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        { users.length>0 && (<div><button onClick={clearSearch} className='btn btn-ghost btn-lg'>Clear</button></div>) }
    </div>
  )
}

export default UserSearch;
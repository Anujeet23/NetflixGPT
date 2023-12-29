import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { removeMovieResults, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            navigate('/error');
        });
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
            });

            //Unsubscribe when the component unmounts
            return () =>  unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        if(!showGptSearch ){
            dispatch(removeMovieResults());
        } 
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between'>
        <img
        className='w-44 mx-auto md:mx-0'
        src= {LOGO}
        alt='Netflix Logo'
        >
        </img>


        {user && (<div className='flex p-2 justify-center'>
            {showGptSearch && (<select className='p-2 bg-gray-800 text-white m-2 rounded-lg hover:bg-gray-600' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                    </option>
                    ))}
            </select>)
            }

            <button onClick={handleGptSearchClick} className='text-white py-1 mr-4 m-2 px-2 font-semibold bg-red-700 rounded-xl hover:bg-red-600'>{showGptSearch ? "Home" :"GPT-Search"}</button>
            <img 
            className='w-10 h-10 md:w-12 md:h-12 rounded-md'
            alt="user-icon" 
            src={user?.photoURL}/>
            <button onClick={handleSignOut} className='font-bold text-white m-3 pl-3'><FontAwesomeIcon icon={faRightFromBracket} /></button>

        </div>)
        }

    </div>
    )
}

export default Header;
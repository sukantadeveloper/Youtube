import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Context } from '../Context/ContextApi';
import '../Styles/navbar.css'
import { fetchData } from '../Utils/Api';
function Navbar() {
    const { query, setQuery } = useContext(Context);
    const [data, setData] = useState([]);
    const va = useRef("");
    function debounce(fn, delay) {
        let id;
        return function () {
            clearTimeout(id);
            id = setTimeout(() => {
                fn();
            }, delay)
        }
    }

    const handleChnage = debounce(x => {
        getdata();
    }, 1000)


    const getdata = () => {
        fetchData(`search/?q=${va.current.value}`).then((res) => {
            setQuery(res.contents);
        })

    }

    console.log(query);
    useEffect(() => {

    }, [])
    return (
        <div>
            <div className='navbar'>

                <input type="text" onChange={handleChnage} ref={va} placeholder='Search Here' />
                {/* <div>
                    <h3>Signin</h3>
                    <h3> Signup</h3>
                </div> */}

            </div>


        </div>
    );
}

export default Navbar;
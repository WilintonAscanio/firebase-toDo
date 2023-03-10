import React, { useState } from 'react'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { userLogOutAync } from '../../redux/actions/userAction';
import './nav.scss'
import { toggleModalActions } from '../../redux/actions/loadingActions';
const Navbar = ({ isAuth }) => {
    
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(userLogOutAync())

    }
    return (
        <section className="secNav">
            <nav className="navar">
                <span className="navar__logo">
                    <HiOutlinePencilAlt className="pencilIcon" /> To Do List
                </span>
                {isAuth ? (
                    <>
                        < AiOutlinePlus className='iconPlus' onClick={() => dispatch(toggleModalActions())} />
                        <button className="btnRegister btnHome" onClick={logOut}>
                            Logout
                        </button>

                    </>

                ) : (
                    /* <div>
                      <NavLink to="/register">Register</NavLink>
                      <br />
                      <NavLink to="/login">Iniciar sesión</NavLink>
                    </div> */
                    <></>
                )}
            </nav>
            <Outlet />
        </section>
    );
};




export default Navbar
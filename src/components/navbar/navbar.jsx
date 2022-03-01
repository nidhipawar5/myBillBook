import React from 'react'
import {Nav, NavLink,Bars,NavMenu } from './navbarelements'
import logo from '../../resources/logo.png'

const Navbar = () => {
    return (
        <>
        <Nav>
            <div className="container d-flex justify-content-between ">
                
             <NavLink to="/">
                 <img src={logo} alt="myBillBook logo" />

             </NavLink>
             
             <NavMenu>
                 <NavLink to="/" activeStyle>
                     Why Use My BillBook?
                 </NavLink>
                 <NavLink to="/" activeStyle>
                     Who is it for?
                 </NavLink>
                 <NavLink to="/" activeStyle>
                     Online Store
                 </NavLink>
                 <NavLink to="/" activeStyle>
                     Pricing
                 </NavLink>
                 <NavLink to="/" activeStyle>
                     FAQs
                 </NavLink>
             </NavMenu>
            </div>
        </Nav>
        </>
    )
}

export default Navbar

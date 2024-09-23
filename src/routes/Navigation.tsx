import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import logo from '../logo.svg';

import {LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { routes } from "./routes";
import { Suspense } from "react";


export const Navigation = () => {
    return (
        <Suspense fallback={<span> Loading..... </span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {/* CREAR NAVLINKS DINAMICOS */}
                            {
                                routes.map(({name, to}) => (
                                    <li key={`route_${to}`}>
                                        <NavLink to={to} className={({isActive})=> isActive ? 'nav-active': ''} >{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({Component, to, path})=>(
                                <Route key={`rr_${to}`} path={path} element={<Component />} />
                            ))
                        }
                        
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}

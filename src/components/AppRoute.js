import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Pagenotfound from '../pages/Pagenotfound'

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/services/:id" element={ <Services /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="*" element={ <Pagenotfound /> } />
                </Routes>
            </div>
        )
    }
}

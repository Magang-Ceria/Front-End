import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { UserMagang, Dashboard, UserAdmin } from '../../pages/pages'

const Path = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/magang' element={<UserMagang/>}/>
            <Route path='/admin' element={<UserAdmin/>}/>
        </Routes>
    </Router>
  )
}

export default Path
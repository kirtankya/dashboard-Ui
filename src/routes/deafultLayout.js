import React from 'react'
import Header from '../shared/common/header'
import { Outlet } from 'react-router-dom'
import Dashboard from '../app/home/dashboard'
import Sidebar from '../shared/common/sidebar'


export default function DeafultLayout() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

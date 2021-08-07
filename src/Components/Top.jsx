import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import List from './Header/List/List';
export default function Top() {
    return (
        <BrowserRouter>
            <List />
        </BrowserRouter>
    )
}


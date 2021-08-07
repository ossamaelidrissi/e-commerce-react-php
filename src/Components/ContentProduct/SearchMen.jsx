import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function SearchMen () {
  
        return (
            <BrowserRouter>
            <div class="dropdown-menu dropdown-menu-right">
                <Link to="/Mens" class="dropdown-item">Mens</Link>
                <Link to="#" class="dropdown-item">Kids</Link>
                <Link to="#" class="dropdown-item">Womans</Link>
            </div>
            </BrowserRouter>
        );
    }

export default SearchMen;
import React from 'react';

import Preloader from '../components/Preloader';

export default function NotFound(props){
    return(
        <main>
            <div id="not-found">
                <i className="fa fa-exclamation-circle"></i>
                <h1>404</h1>
                <h1>Not Found</h1>
            </div>
            <Preloader/>
        </main>
    );
}
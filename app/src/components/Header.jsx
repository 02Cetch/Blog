import React from 'react';

import MediaLinks from './MediaLinks';


export default function Header(props){
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <MediaLinks className="header__links" />
                        </div>
                        <div className="title">
                            <h1>programming blog</h1>
                            <p>If I create from the heart, nearly everything works; if from the head, almost nothing.</p>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    );
}
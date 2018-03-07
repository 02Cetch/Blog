import React from 'react';

import MediaLinks from './MediaLinks';

export default function Footer(props){
    return(
        <footer>
            <MediaLinks className="footer__links"/>
            <div className="footer__title">
                <span>Lorem, 2018</span>
            </div>
        </footer>
    );
}
import React from 'react';

export default function MediaLinks(props){
    return(
        <div className={props.className}>
            <a rel="noopener noreferrer" target="_blank" href="https://vk.com/feed" className="media__link"><i className="fa fa-vk"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://ru-ru.facebook.com/" className="media__link"><i className="fa fa-facebook"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/?lang=ru" className="media__link"><i className="fa fa-twitter"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/?hl=ru" className="media__link"><i className="fa fa-instagram"></i></a>
        </div>
    );
}
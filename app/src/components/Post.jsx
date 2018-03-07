import React from 'react';

import Button from './Button'

export default function Post(props){
    const postImage ={
        background: 'url(' + props.img + ') no-repeat center top/cover'
    };
    return(
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="post__item" style={postImage}>
                <div className="descr">
                    <p className="post__title">{props.title}</p>
                    <Button to={`post/${props.postId}`} className="button">Открыть</Button>
                    <div className="post__descr">
                        {
                            props.descr
                        }
                        <p className="tags">{'#' +props.tags}</p>
                    </div>
            </div>
        </div>
    </div>
    );
}
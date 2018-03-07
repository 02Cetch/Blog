import React, {Component} from 'react';

import PropTypes from 'prop-types';

import Post from './Post';

export default class Posts extends Component{
    render(){
        return(
            <section className="s-posts">
                <div className="container">
                    <div className="row">
                        {
                            this.props.handleUserInput.map(data =>
                                <Post postId={data.id} tags={data.tags} key={data.id} title={data.title} img={data.img}  descr={data.descr}/>
                        )
                        }
                    </div>
                </div>
            </section>
        );
    }
}
Posts.propTypes = {
    handleUserInput: PropTypes.any,
    data: PropTypes.array.isRequired
};
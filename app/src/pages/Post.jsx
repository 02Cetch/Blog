import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

import NotFound from './NotFound';


export default class Post extends Component{ // страница с отдельным постом
    constructor(props){
        super(props);
        this.renderPost = this.renderPost.bind(this);
        this.renderEmptyPage = this.renderEmptyPage.bind(this);
    }
    renderPost(post){
        console.log(post)
        const {title, img, text, tags } = post;
        return(
            <Fragment>
                <Header/>
                <section className="s-posts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="post">
                                    <img src={img} alt="" className="post__image"/>
                                    <h1 className="post__title">{title}</h1>
                                    <div className="post__descr">
                                        <p>
                                            {
                                                text
                                            }
                                        </p>
                                        <div className="post__tags">
                                            <div className="tags">#{tags}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                <Preloader/>
            </Fragment>
        )        
    }
    renderEmptyPage(){
        return(
            <NotFound/>
        )
    }
    render(){
        const { id } = this.props.match.params;
        const post = this.props.data[id-1];
        return post ? this.renderPost(post) : this.renderEmptyPage()
    }
}
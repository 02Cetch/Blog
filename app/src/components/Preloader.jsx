import React, {Component} from 'react';

import $ from "jquery";

export default class Preloader extends Component{
    componentDidMount(){
        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");
    }
    render(){
        return(
        <div className="loader">
            <div className="loader_inner"></div>
        </div>
        )
    }
}
import React, {Component} from 'react';

import Button from './Button';

import MediaLinks from './MediaLinks';
export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
            active: false
        };
        this.toggleActive = this.toggleActive.bind(this);
    }
    toggleActive(){
        this.setState({active: !this.state.active});
    }
    render(){
    return(
            <nav className={this.state.active ? 'active' : ''}>
                <div onClick={this.toggleActive} className={`btn_mnu${this.state.active ? " active" : ''}`}>
                    <div className="btn_row"></div>
                    <div className="btn_row"></div>
                    <div className="btn_row"></div>
                </div>
                <div className={`aside__content${this.state.active ? " active" : ''}`}>
                    <ul className="menu">
                        <li><Button onClick={this.toggleActive} to="/" className="menu__link"><i className="fa fa-home"></i>Home</Button></li>
                        <li><Button onClick={this.toggleActive} to="/about" className="menu__link"><i className="fa fa-address-book-o"></i>About</Button></li>
                        <li><Button onClick={this.toggleActive} to="/contact" className="menu__link"><i className="fa fa-phone"></i>Contact</Button></li>
                    </ul>
                    <div className="divide"></div>
                    <MediaLinks className={`social__links${this.state.active ? " active" : ''}`}/>
                </div>
            </nav>
        );
    }
}
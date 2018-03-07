import React, {Component, Fragment} from 'react';

import db from '../db';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

export default class Home extends Component{ // главная страница сайта
    constructor(props){
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
            filterText: ''
          };
    }
  handleUserInput(filterText) { // обрабатывает введенные пользователем данные
    this.setState({filterText: filterText}, ()=>{console.log("State: " + this.state.filterText)});
  }
    render(){
        const
        text = this.state.filterText,
        posts = text ? db.filter(n => n.tags.includes(text)) : db; // фильтрует все посты по тегам, введенным пользователем
        console.log(text);
        console.log(posts);
    return(
        <Fragment>
            <Header/>
            <SearchBar
                filterText={this.state.filterText}
                onUserInput={this.handleUserInput}/>
            <Posts handleUserInput={posts} data={db}/>
            <Footer/>
            <Preloader/>
        </Fragment>
    );
}
}
import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(){
        this.props.onUserInput(this.filterTextInput.value.toLowerCase(),); // передаёт значение строки вверх по иерархии компонентов
    }
    render(){
        return(
            <div className="searchbar">
                <div id="search-box">
                    <input 
                    id="term" 
                    type="text" 
                    placeholder="Tag search..." 
                    value={this.props.filterText} 
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}
                    />

                    <label className="screen-reader" htmlFor="term"><i className="fa fa-search"></i></label>
                </div>
            </div>
        );
    }
}
SearchBar.propTypes = {
	filterText:  PropTypes.any,
	onUserInput: PropTypes.any
};
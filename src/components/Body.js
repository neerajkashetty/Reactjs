import { Component } from "react";
import React from "react";
import './Expenses.css';
import { Button } from "@material-ui/core";
import {CardList} from "./cardlist.component"
import { StraightenOutlined } from "@material-ui/icons";

class Inner extends Component{
    constructor(){
        super();
        this.state={
            monsters: [],
            searchField : ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({monsters: user}));
    }

    render(){
        const {monsters , searchField} = this.state;
        const filterednames = monsters.filter(monsters=> monsters.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div className="char">
                {/* <h1 className="Body">{this.state.String}</h1> */}
                <input 
                type='search' 
                placeholder="F*UK"
                onChange={e=> this.setState({searchField: e.target.value})}           
                />
                <CardList monsters={filterednames}/>   
            </div>

        );
    }
}


export default Inner;
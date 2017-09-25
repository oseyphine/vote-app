import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
	render(){
		return(
			<nav>
	            <ul>
			    	<li><Link to='/'>VOTES</Link></li>
			    	<li><Link to='/choix'>CHOIX</Link></li>
			    	<li><Link to='/confirmation'>CONFIRMATION</Link></li>
			    	<li><Link to='/avoter'>A VOTER !</Link></li>
	            </ul>
          	</nav>
			);
	}
}
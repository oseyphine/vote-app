import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Votes from './Votes'
import Choix from './Choix'
import Confirmation from './Confirmation'
import Avoter from './Avoter'

export default class Main extends Component{

	render(){
		return(
			<div>
				<Switch>
			      <Route exact path='/' component={Votes}/>
			      <Route path='/choix' component={Choix}/>
			      <Route path='/confirmation' component={Confirmation}/>
			      <Route path='/avoter' component={Avoter}/>
				</Switch>
			</div>
			);
	}
}
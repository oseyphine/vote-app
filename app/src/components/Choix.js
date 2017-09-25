import React, { Component } from 'react'

export default class Choix extends Component {
	render(){
		return(
			<div>
				<h1>Vote n° X : Titre ici</h1>
				<button type="button"> « Pour » </button>
				<button type="button"> « Contre » </button>
				<button type="button"> « Abstention » </button>
			</div>
			);
	}
}
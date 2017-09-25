import React, { Component } from 'react'

export default class Confirmation extends Component {
	render(){
		return(
			<div>
				<p>Votre choix est : </p>
				<button> Choix </button>
				<p>Voulez-vous valider définitivement ?</p>
				<button type="button"> « Je valide » </button>
				<button type="button"> Annuler </button>
			</div>
			);
	}
}
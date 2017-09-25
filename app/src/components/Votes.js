import React, { Component } from 'react'

export default class Votes extends Component {
	render(){
		return(
			<div>
          		<p className="App-intro">
            	Veuillez sélectionner un <code>vote</code>.
          		</p>
    			<button type="button">Vote n° 1 : Titre ici</button>
				<button type="button">Vote n° 2 : Titre ici</button>
				<button type="button">Vote n° 3 : Titre ici</button>
				<button type="button">Vote n° 4 : Titre ici</button>
				<button type="button">Vote n° 5 : Titre ici</button>
			</div>
			);
	}
}
import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';
import './StarWars.css';

class StarWarsCharacterList extends React.Component {
    constructor() {
        super();
        this.state = {
            showInfo: [false, false, false, false, false, false, false, false, false, false],
        }
    }

    toggleInfo = (characterId) => {
        console.log(this)
        this.setState({
            showInfo: this.state.showInfo.map((show, idx) => {
                if (characterId === this.props.starwarsChars[idx].name) {
                    return !show
                }
                return show
            })
        })
    }

    render() {
        return (
            <div className='character-list'>
                {this.props.starwarsChars.map((character, idx) => (
                    <StarWarsCharacter key={character.name} character={character} toggleInfo={this.toggleInfo} showInfo={this.state.showInfo[idx]} />
                ))}
            </div>
        );
    };
};

export default StarWarsCharacterList;
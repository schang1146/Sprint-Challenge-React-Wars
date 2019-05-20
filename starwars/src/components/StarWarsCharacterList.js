import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';
import './StarWars.css';

class StarWarsCharacterList extends React.Component {

    // broken
    toggleInfo = (characterId, showInfo) => {
        this.setState({
            character: this.props.starwarsChars.map(character => {
                if (characterId === character.name) {
                    return {
                        ...character,
                        showInfo: !this.props.showInfo,
                    };
                }
                return character;
            })
        })
    }

    render() {
        return (
            <div className='character-list'>
                {this.props.starwarsChars.map(character => (
                    <StarWarsCharacter key={character.name} character={character} toggleInfo={this.toggleInfo} showInfo={false} />
                ))}
            </div>
        );
    };
};

export default StarWarsCharacterList;
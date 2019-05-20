import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

class StarWarsCharacterList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <div className='character-list'>
                {this.props.starwarsChars.map(character => (
                    <StarWarsCharacter character={character} />
                ))}
            </div>
        );
    };
};

export default StarWarsCharacterList;
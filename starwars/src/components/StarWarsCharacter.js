import React from 'react';

const StarWarsCharacter = props => {
        return (
            <div className='character' onClick={(e) => props.toggleInfo(props.character.name, e)}>
                <h2 className='character-name'>{props.character.name}</h2>
                <ul className={`character-info${props.showInfo ? '' : ' hidden'}`}>
                    <li>
                        <strong>Birth Year:</strong> {props.character.birth_year}
                    </li>
                    <li>
                        <strong>Gender: </strong> {props.character.gender}
                    </li>
                    <li>
                        <strong>Height: </strong> {props.character.height}
                    </li>
                    <li>
                        <strong>Mass: </strong> {props.character.mass}
                    </li>
                    <li>
                        <strong>Skin Color: </strong> {props.character.skin_color}
                    </li>
                    <li>
                        <strong>Eye Color: </strong> {props.character.eye_color}
                    </li>
                </ul>
            </div>
    );
};

export default StarWarsCharacter;
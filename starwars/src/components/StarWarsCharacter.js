import React from 'react';

class StarWarsCharacter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='character'>
                {this.props.character.name}
            </div>
        );
    };
};

export default StarWarsCharacter;
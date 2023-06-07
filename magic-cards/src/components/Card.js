import React from "react";
import './style.css'

class Card extends React.Component {
    render() {
        return (
            <>
                <div className="cardContainer" id={this.props.id}>
                    <img src={this.props.image} alt={this.props.name} className="cardImage"/>
                    <h3>{this.props.name}</h3>
                </div>
            </>
        )
    }
}

export default Card;
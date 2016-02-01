import React from 'react';

export default class HCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hCard: props.hCard
        };
    }
    handleChange(evt) {
        this.state.hCard[evt.target.name] = evt.target.value;
        this.props.onChange(this.state.hCard);
    }
    render() {
        return (
            <div>
            <input type = "text" name = "firstname" defaultValue = {this.state.hCard.firstname} onChange = {this.handleChange.bind(this)} />
            <input type = "text" name = "lastname" defaultValue = {this.state.hCard.lastname} onChange = {this.handleChange.bind(this)} /> 
        </div>
        )
    }
}

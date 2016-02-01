import React from 'react';

export default class HCardFormInput extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange(evt) {
        this.props.onChange(evt.target.name, evt.target.value);
    }
    render() {
        return (<div className="six columns">
               <label for={this.props.name}>{this.props.label}</label>
               <input className="u-full-width" type={this.props.type} defaultValue={this.props.value} name={this.props.name} onChange={this.handleChange.bind(this)} />
             </div>);
    }
}

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
            <form>
            <h1>hCard Builder</h1>
            <fieldset>
             <legend>Personal Details</legend>
             <div className="row">
             <div className="six columns">
               <label for="givenname">Given Name</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.givenname}  name="givenname" onChange={this.handleChange.bind(this)} />
             </div>
             <div className="six columns">
               <label for="surname">Surname</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.surname}  name="surname" onChange={this.handleChange.bind(this)} />
             </div>
             </div>
             <div className="row">
             <div className="six columns">
               <label for="email">Email</label>
               <input className="u-full-width" type="email" defaultValue = {this.state.hCard.email}  name="email" onChange={this.handleChange.bind(this)} />
             </div>
             <div className="six columns">
               <label for="phone">Phone</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.phone}  name="phone" onChange={this.handleChange.bind(this)} />
             </div>
             </div>
            </fieldset>
            <fieldset>
             <legend>Address</legend>
             <div className="row">
             <div className="six columns">
               <label for="houseno">House Name or #</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.houseno}  name="houseno" onChange={this.handleChange.bind(this)} />
             </div>
             <div className="six columns">
               <label for="street">Street</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.street}  name="street" onChange={this.handleChange.bind(this)} />
             </div>
             </div>
             <div className="row">
             <div className="six columns">
               <label for="suburb">Suburb</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.suburb}  name="suburb" onChange={this.handleChange.bind(this)} />
             </div>
             <div className="six columns">
               <label for="state">State</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.state}  name="state" onChange={this.handleChange.bind(this)} />
             </div>
             </div>
             <div className="row">
             <div className="six columns">
               <label for="postcode">Postcode</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.postcode}  name="postcode" onChange={this.handleChange.bind(this)} />
             </div>
             <div className="six columns">
               <label for="country">Country</label>
               <input className="u-full-width" type="text" defaultValue = {this.state.hCard.country}  name="state" onChange={this.handleChange.bind(this)} />
             </div>
             </div>
            </fieldset>
            </form>
        )
    }
}

import React from 'react';
import HCardFormInput from './HCardFormInput';

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
    handleInputUpdate(name, value) {
        this.state.hCard[name] = value;
        this.props.onChange(this.state.hCard);
    }
    handleAvatar(evt) {
        var reader = new FileReader();

        reader.onload = function(evt) {
            this.state.hCard['avatar'] = evt.target.result;
            this.props.onChange(this.state.hCard);
        }.bind(this);

        reader.readAsDataURL(evt.target.files[0]);
    }
    render() {
        return (
            <form>
            <h1>hCard Builder</h1>
            <fieldset>
             <legend>Personal Details</legend>
             <div className="row">
              <HCardFormInput name="givenname" label="Given Name" type="text" value={this.state.hCard.givenname} onChange={this.handleInputUpdate.bind(this)} />
              <HCardFormInput name="surname" label="Surname" type="text" value={this.state.hCard.surname} onChange={this.handleInputUpdate.bind(this)} />
             </div>
             <div className="row">
               <HCardFormInput name="email" label="Email" type="email" value={this.state.hCard.email} onChange={this.handleInputUpdate.bind(this)} />
               <HCardFormInput name="phone" label="Phone" type="text" value={this.state.hCard.phone} onChange={this.handleInputUpdate.bind(this)} />
             </div>
            </fieldset>
            <fieldset>
             <legend>Address</legend>
             <div className="row">
              <HCardFormInput name="houseno" label="House Name or #" type="text" value={this.state.hCard.houseno} onChange={this.handleInputUpdate.bind(this)} />
              <HCardFormInput name="street" label="Street" type="text" value={this.state.hCard.street} onChange={this.handleInputUpdate.bind(this)} />
             </div>
             <div className="row">
              <HCardFormInput name="suburb" label="Suburb" type="text" value={this.state.hCard.suburb} onChange={this.handleInputUpdate.bind(this)} />
              <HCardFormInput name="state" label="State" type="text" value={this.state.hCard.state} onChange={this.handleInputUpdate.bind(this)} />
             </div>
             <div className="row">
             <HCardFormInput name="postcode" label="Postcode" type="text" value={this.state.hCard.postcode} onChange={this.handleInputUpdate.bind(this)} />
             <HCardFormInput name="country" label="Country" type="text" value={this.state.hCard.country} onChange={this.handleInputUpdate.bind(this)} />
             </div>
             <div className="row">
             <div className="six columns">
                <span className="button-primary button-file">Upload Avatar<input type="file" onChange={this.handleAvatar.bind(this)}/></span>
             </div>
             <div className="six columns">
                <input className="button-primary button-create" type="submit" value="Create hCard" />
             </div>
             </div>            
            </fieldset>
            </form>
        )
    }
}

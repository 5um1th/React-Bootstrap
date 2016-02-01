import React from 'react';

export default class HCardFormInput extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
     return (<div className="six columns">
               <label for={this.props.name}>{this.props.label}</label>
               <input className="u-full-width" type={this.props.type}  name="{this.props.name}" />
             </div>);
  }
}
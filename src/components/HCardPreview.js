import React from 'react';

export default class HCardPreview extends React.Component {
  constructor(props) {
      super(props);
      this.state = {hCard: props.hCard};
  }
  render() {
     return (<div> <p>{this.state.hCard.firstname}</p><p>{this.state.hCard.lastname}</p></div>);
  }
}
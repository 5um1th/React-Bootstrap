import React from 'react';

export default class HCardPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hCard: props.hCard
        };
    }
    render() {
        return (<div className="hCard"> 
              <h2>HCARD PREVIEW</h2>
              <div className="hCard-wrapper">
              <div className="hCard-header">
               <h3>{this.state.hCard.givenname} {this.state.hCard.surname}</h3>
               <img src={this.state.hCard.avatar} id="imagePreview" />
              </div>
              <div className="hCard-body">
                 <div className="row">
                     <div className="three columns hCard-body-label">
                     Email
                     </div>
                     <div className="nine columns hCard-body-value no-transform">
                     {this.state.hCard.email}
                     </div>
                 </div>
                 <div className="row">
                     <div className="three columns hCard-body-label">
                     Phone
                     </div>
                     <div className="nine columns hCard-body-value">
                     {this.state.hCard.phone}
                     </div>
                 </div>
                 <div className="row">
                     <div className="three columns hCard-body-label">
                     Address
                     </div>
                     <div className="nine columns hCard-body-value">
                      {this.state.hCard.houseno} {this.state.hCard.street}
                     </div>
                 </div>
                 <div className="row">
                     <div className="three columns hCard-body-label">
                     
                     </div>
                     <div className="nine columns hCard-body-value">
                      {this.state.hCard.suburb}{(this.state.hCard.state!=='') ? ', ' : ''} {this.state.hCard.state}
                     </div>
                 </div>
                  <div className="row">
                <div className="two columns hCard-body-label">Postcode</div>
                <div className="four columns hCard-body-value">{this.state.hCard.postcode}</div>
                <div className="two columns hCard-body-label">Country</div>
                <div className="four columns hCard-body-value">{this.state.hCard.country}</div>
              </div>
                 </div>
                 </div>
           </div>);
    }
}

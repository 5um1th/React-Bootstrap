import React from 'react';
import HCardForm from './HCardForm';
import HCardPreview from './HCardPreview';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hCard: {
                givenname: 'Sumith',
                surname: 'Jitta',
                email: 'sumith@sumith.com',
                phone: '0427038914',
                houseno: '31',
                street: '66-70 Parramatta Road',
                suburb: 'Camperdown',
                state: 'NSW',
                postcode: '2050',
                country: 'Australia',
                avatar: 'http://hcard-builder.s3-ap-southeast-2.amazonaws.com/dist/images/default-avatar.png'

            }
        };
    }
    handleChange(hcard) {
        this.setState({
            hcard: hcard
        });
    }
    render() {
        return (<div className="row"><div className="one-half column wrapper"><HCardForm onChange={this.handleChange.bind(this)} hCard={this.state.hCard}/></div>
                <div className="one-half column wrapper preview"><HCardPreview hCard={this.state.hCard}/></div></div>);
    }
}

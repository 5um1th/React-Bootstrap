import React from 'react';
import HCardForm from './HCardForm';
import HCardPreview from './HCardPreview';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hCard: {
                firstname: 'Sumith',
                lastname: 'Jitta'
            }
        };
    }
    handleChange(hcard) {
        this.setState({
            hcard: hcard
        });
    }
    render() {
        return (<div><HCardPreview hCard={this.state.hCard}/><HCardForm onChange={this.handleChange.bind(this)} hCard={this.state.hCard}/></div>);
    }
}

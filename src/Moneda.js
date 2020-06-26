import React, {Component} from 'react';
import "./Moneda.css";

class Moneda extends Component {
    render() {
        return (
            <div className="moneda">
                <img src={this.props.info.imgSrc} alt={this.props.info.side}/>;
            </div>
        
        )
    }
}

export default Moneda;
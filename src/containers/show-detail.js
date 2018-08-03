import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShowDetail extends Component {
    render() {
        if(!this.props.show){
            return(<h4>Select a show....</h4>);
        }
        return (
            <div>
                <h2>{this.props.show.title}</h2>
                <h3>{this.props.show.started}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        show: state.activeShow
    };
}

export default connect(mapStateToProps)(ShowDetail);
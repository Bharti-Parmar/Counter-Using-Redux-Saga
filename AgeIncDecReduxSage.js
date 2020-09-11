import React, { Component } from 'react';
import {connect} from 'react-redux';

class AgeIncDecReduxSage extends Component {


    up = () => {
        console.log(this.props.age);
        this.props.onAgeUp()
    } 

    down = () => {
        this.props.onAgeDown()
    }

    render() {
        return (
            <div>
                <h1 className="text-center text-primary">{this.props.age}</h1>
                <div>
                    <button className="btn btn-success mr-2" onClick={()=>this.up()}>Up</button>
                    <button className="btn btn-danger" onClick={()=>this.down()}>Down</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        age: state.age
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAgeUp: () => dispatch({ type: "AgeUpAsync", value: '1' }),
        onAgeDown: () => dispatch({ type: "AgeDown", value: '1' })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AgeIncDecReduxSage);
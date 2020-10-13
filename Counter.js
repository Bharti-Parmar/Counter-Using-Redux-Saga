import React, { Component } from 'react';
// 1). - connect the component to redux
import { connect } from 'react-redux';

// ------------------- Here, we have 12 steps -------------------

class Counter extends Component {

    constructor(props){
        super(props)
    }

// 12). ------------ value store in dispatch should be pass here by using props which is coming from "mapStateToProps" connection
    increment = () => {
        this.props.dispatch({ type: "Increment" });
    }

    decrement = () => {
        this.props.dispatch({ type: "Decrement" });
    }

    render() {
        return (
            <div>
                <div className="card mt-4 p-3 mx-auto">
                    <h2>Counter</h2>
                    <div className="row mt-3">
                        <div className="col-4">
                          <button type="submit" className="btn btn-success" onClick={this.increment}>+</button>
                        </div>
                        <div className="col-4">
                            <h3>{this.props.count}</h3>
                        </div>
                        <div className="col-4">
                         <button type="submit" className="btn btn-danger" onClick={this.decrement}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// 2). -- map / set up the state to props
const mapStateToProps = state => ({
    count: state.count
});

// connect mapStateToProps for fetching props value
export default connect(mapStateToProps)(Counter);
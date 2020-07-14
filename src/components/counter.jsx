import React, { Component } from 'react';


class Counter extends Component {
   

   
    render() {
        return (
           
            <div>

                <div className="row">
                    <div className="col-md-1">
                        <span className="badge badge-primary">{this.props.counter.value}</span>
                    </div>
                    <div className="col-md-4">
                        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary mr-1">+</button>
                        <button disabled={this.props.counter.isDisabled} onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary mr-1">-</button>
                        <button onClick={()=>this.props.onDelete(this.props.counter)} className="btn btn-danger">Delete</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Counter;
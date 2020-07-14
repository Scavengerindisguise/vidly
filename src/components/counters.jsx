import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <button onClick={this.props.onReset} className="btn btn-primary mt-2">Reset</button>
                </div>
                {this.props.counters.map((counter) => {
                    return (
                        <div key={counter.id}>
                            <Counter onDelete ={this.props.handleDelete} onIncrement={this.props.handleIncrement} onDecrement={this.props.handleDecrement}  counter={counter}  onReset={this.props.onReset} />
                        </div>)
                })}
            </React.Fragment>
        );
    }
}

export default Counters;
import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }
    constructor(props) {
        super(props);
        this.handleChange = this.handlChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handlChange(e) {
        this.setState({
                message: e.target.value
        });
    }
    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하시오"
                    value={this.state.message}
                    onChange={this.handlChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
export default EventPractice;
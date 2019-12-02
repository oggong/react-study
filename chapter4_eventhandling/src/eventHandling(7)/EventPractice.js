import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    handlChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자"
                    value={this.state.username}
                    onChange={this.handlChange}
                />
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
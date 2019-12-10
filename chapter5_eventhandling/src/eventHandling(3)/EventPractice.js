import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
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
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
            </div>
        );
    }
}
export default EventPractice;
import React from 'react'; import './App.css';import 'bootstrap/dist/css/bootstrap.min.css'

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form className="border shadow rounded bg-transparent text-white p-5">
                <label className="d-flex">
                    Is going:
                    <input
                        className="form-control w-25"
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label className="w-100">
                    Number of guests:
                    <input
                        className="form-control my-2"
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" className="form-control bg-success border-success text-white"/>
            </form>
        );
    }
}

export default Reservation;

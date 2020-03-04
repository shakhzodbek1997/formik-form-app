import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class MiniFormik extends React.Component {
    state = {
        values: this.props.initialValues || {},
        touched: {},
        errors: {}
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        event.persist();
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value
            },
        }));
    };
    handleBlur = event => {
        const target = event.target;

        const name = target.name;
        event.persist();
        this.setState(prevState => ({
            touched: {
                ...prevState.touched,
                [name]: true,
            },
        }));
    };

    render() {
        return this.props.children({
            ...this.state,
            handleChange: this.handleChange,
            handleBlur: this.handleBlur,
        });
    }
}

class Reservation extends React.Component {
    render() {
        return (
            <MiniFormik initialValues={{
                isGoing: true,
                numberOfGuests: 2,
            }}>
                {(props) => {
                    const {values, errors, touched, handleChange, handleBLur} = props;
                    return(
                    <form className="border form_shadow rounded bg-transparent text-white p-5">
                        <label className="d-flex justify-content-between">
                            Is going:
                            <input
                                className="form-control "
                                name="isGoing"
                                type="checkbox"
                                checked={values.isGoing}
                                onChange={handleChange}
                                onBlur={handleBLur}
                            />
                        </label>
                        <br/>

                        <label className="w-100">
                            Number of guests:
                            <input
                                className="form-control my-2"
                                name="numberOfGuests"
                                type="number"
                                value={values.numberOfGuests}
                                onChange={handleChange}/>
                        </label>
                        <input type="submit" className="form-control bg-success border-success  text-white"/>
                        <pre className="my-3 rounded p-3">{JSON.stringify(props, null, 2)}</pre>
                    </form>
                )}}
            </MiniFormik>
        );
    }
}

export default Reservation;

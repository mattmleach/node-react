import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login">Logout</Link>
                <h1>Hi {this.props.user.name} Welcome to our Experiment</h1>
                <p />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.authentication.user };
};

export default connect(mapStateToProps)(Home);

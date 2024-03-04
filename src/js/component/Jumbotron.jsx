import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return(
    < div className="container">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.title}</h1>
                <p className="col-md-8 fs-4">{props.text}</p>
                <button className="btn btn-primary btn-lg" type="button">{props.callToAction}</button>
            </div>
        </div>
    </div>
    )
};

Jumbotron.propTypes ={
    title : PropTypes.string,
    text: PropTypes.string,
    callToAction: PropTypes.string
}

export default Jumbotron;

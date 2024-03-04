import React from "react";
import PropTypes from "prop-types";

const MyCard = (props)=>{
    return (

        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src={props.imgURL} alt="Card image cap" /> 
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
        </div> 
    );
}
 MyCard.propTypes={
    imgURL: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
 };

export default MyCard;
import React from "react";
import { translate } from "react-jhipster";
import { Link } from "react-router-dom";

const FinishLessonsComponent = props => {
    return (
        <>
            <Link to="/yourJourney" className="backAction" />
            <div className="finishLessons">
                <h1>Finish all your lessons from the comfort of, your home</h1>
                <Link to="/Lectures" className="btnAction">Continue</Link>
            </div>
        </>
    );
}

export default FinishLessonsComponent;
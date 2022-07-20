import "./RateButtonContainer.css";
import API_URL from "../backend_url";
import {useState} from "react";

function RateButton(props) {
    const sClassName = "rateButton " + (props.selected ? "selected " : "");

    function getRatingValue() {
        return props.id.replace("b", "");
    }

    function isSelected() {
        return !!props.selected;
    }

    function onClick() {
        if (isSelected()) {
            props.onClick("b0"); // Reset button state
            props.onSubmit(getRatingValue());
        } else {
            props.onClick(props.id);
        }
    }

    return (
        <button className={sClassName} id={props.id} onClick={onClick}>{props.text}</button>
    )
}

function RateButtonContainer(props) {
    const [selectedButton, setSelectedButton] = useState("b0");

    function submitRating(iScore) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session_id: props.session_id,
                media_id: props.index,
                user_id: props.user_id,
                score: iScore
            })
        };
        // fetch(`${API_URL}/add_rating`, requestOptions);
        console.log("Submitted " + iScore + " points.");
        props.onRateSubmitted();
    }

    return (
        <div className={"buttonContainer"}>
            <RateButton id="b1" selected={selectedButton === "b1"} text={"1"} onClick={setSelectedButton}
                        onSubmit={submitRating}/>
            <RateButton id="b2" selected={selectedButton === "b2"} text={"2"} onClick={setSelectedButton}
                        onSubmit={submitRating}/>
            <RateButton id="b3" selected={selectedButton === "b3"} text={"3"} onClick={setSelectedButton}
                        onSubmit={submitRating}/>
            <RateButton id="b4" selected={selectedButton === "b4"} text={"4"} onClick={setSelectedButton}
                        onSubmit={submitRating}/>
            <RateButton id="b5" selected={selectedButton === "b5"} text={"5"} onClick={setSelectedButton}
                        onSubmit={submitRating}/>
        </div>
    )
}

export default RateButtonContainer;
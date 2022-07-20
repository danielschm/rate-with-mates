import {useEffect, useState} from "react";
import RateItem from "./RateItem";
import RateButtonContainer from "./RateButtonContainer";

const ImageSlider = ({data, session_id, user_id}) => { // takes in images as props
    const [counter, setCounter] = useState(0);
    const [index, setIndex] = useState("id_1");
    const [imageUrl, setImageUrl] = useState(null);

    // const len = Object.keys(data).length;

    function updateCounter() {
        // const nextIndex = counter + 1;
        // if (nextIndex >= len) {
        //     window.open(`/summary/${session_id}`, '_blank')
        // } else {
        //     setCounter(nextIndex);
        // }
    }

    const setters = () => {
        setImageUrl("https://i.redd.it/8qsptfsfvoc91.jpg");
        // setIndex(Object.keys(data)[counter]);
        // setImageUrl(data[index]);
    }

    useEffect(setters);

    return (
        <>
            <RateItem url={imageUrl}/>
            <RateButtonContainer index={index} session_id={session_id} user_id={user_id} onRateSubmitted={updateCounter}/>
        </>
    )
};

export default ImageSlider;
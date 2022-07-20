import "./RateItem.css";

function RateItem(props) {
    return(
        <div className={"imageContainer"}>
            <img src={props.url}/>
        </div>
    )
}

export default RateItem;
import ImageSlider from "../components/ImageSlider";

const oStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "Column"
};

function Rate() {


    return (
        <div style={oStyle}>
            <ImageSlider/>
        </div>
    );
}

export default Rate;

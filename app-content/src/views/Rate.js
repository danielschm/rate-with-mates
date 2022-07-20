import RateButtons from "../components/RateButtons";
import RateItem from "../components/RateItem";

function fetchNextUrl() {
    return "https://preview.redd.it/v82sgba306a91.jpg?width=1920&format=pjpg&auto=webp&s=20d065cb4e4655a76f72470d849ebf6996c1f3ec";
}

function Rate() {
    const sUrl = fetchNextUrl();

    return (
        <div>
            <RateItem url={sUrl}/>
            <RateButtons/>
        </div>
    );
}

export default Rate;

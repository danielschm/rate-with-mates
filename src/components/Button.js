const oButtonStyle = {
    borderRadius: "2px",
    background: "var(--primary)",
    border: "none",
    padding: "1rem 2rem",
    fontWeight: "700"
};

function Button(props) {
    return (
        <button style={oButtonStyle} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;
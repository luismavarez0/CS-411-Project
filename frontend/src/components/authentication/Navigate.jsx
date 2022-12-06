const NavigateButton = (props) =>{

    const buttonStyle = "bg-blue-500 border-2 border-gray-700 w-1/6 mx-auto my-4 hover:bg-gray-700 hover:text-white";

    return (
        <button className={buttonStyle} onClick={props.buttonFunction}>{props.buttonText}</button>
    )
}

export default NavigateButton;
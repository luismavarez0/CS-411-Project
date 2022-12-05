const Inputs = (props) => {

    const inputStyle = "w-2/3 h-8 border-2 border-gray-700 rounded-lg text-center my-2 mx-auto";

    return (
        <input className = {inputStyle} placeholder={props.placeHolder} onChange = {props.funcCall}></input>

    )
}

export default Inputs;
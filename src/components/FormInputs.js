import { useState } from "react";
import "./FormInputs.css"

function FormInputs(props) {
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className="form-input">
            <label>{label}</label>
            <input {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInputs
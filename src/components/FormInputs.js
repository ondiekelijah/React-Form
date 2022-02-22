import { useState } from "react/cjs/react.development";
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
                // react-dom.production.min.js:216 TypeError: (0 , s.useState) is not a function
                onFocus={() => inputProps.name === "confirmPassword" && handleFocus.setFocused(true)}
                focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInputs
import "./FormInputs.css"

function FormInputs(props) {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className="form-input">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}

export default FormInputs
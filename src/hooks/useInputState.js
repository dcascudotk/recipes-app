import {useState} from "react";
export default initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = evt => {
        setValue(evt.target.value);
    }

    const reset = () => {
        setValue("");
    }

    const set = (value) => {
        setValue(value);
    }

    return [value, handleChange, set, reset];
}
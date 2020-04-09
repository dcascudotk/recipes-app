import {useState} from "react";
export default initialValue => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = (value) => {
        setValue(!value);
    }

    return [value, toggleValue];
}

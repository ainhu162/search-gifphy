import React from 'react'
import {DebounceInput} from 'react-debounce-input';

export default function SearchInput(props) {
    const onInputChange = (value) => {
        props.onValueChange(value);
    }

    return (
        <div className="search w-100 my-3">
            <DebounceInput
                minLength={1}
                debounceTimeout={500}
                placeholder="Search..."
                className="form-control form-control-lg w-100"
                onChange={event => onInputChange(event.target.value)} />
        </div>
    )
}

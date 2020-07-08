import React from 'react'

const CheckBox = (props: any) => {
    return(
        <div className="checkBoxOfSelectHouse">
            <img src={props.img} alt="Houses of GOT"/><br/>
            <input onClick={() => props.setHouse(props.name)} type="checkbox"/> {props.name}
        </div>
    )
}

export default CheckBox
import React from 'react'

const Sort = ({value}) => {
    return (
        <div className="type-sort">
            <input value={value} type="button"/>
            <div className="arrow">▾</div>
        </div>
    )
}

export default Sort
import React from 'react'

const Sort = ({value, id}) => {
    return (
        <div className="type-sort" id={id}>
            <input value={value} type="button"/>
            <div className="arrow">▾</div>
        </div>
    )
}

export default Sort
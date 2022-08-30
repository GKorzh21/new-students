import React from 'react';
import cl from './DelButton.module.css'

const DelButton = ({setIdToDelete, id, onMouseEnter, onMouseLeave}) => {

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cl.del}
            onClick={() => setIdToDelete(id)}
        >×</div>
    )
}

export default DelButton
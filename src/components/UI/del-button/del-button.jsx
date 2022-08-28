import React from 'react';
import cl from './DelButton.module.css'

const DelButton = ({setModal}) => {

    return (
        <div
            className={cl.del}
            onMouseEnter={(e) => (e.target.parentNode.style.backgroundColor = 'rgba(255, 128, 128, 0.894)')}
            onMouseLeave={(e) => (e.target.parentNode.style.backgroundColor = 'rgba(105, 195, 255, 0.7)')}
            onClick={() => setModal(true)}
        >×</div>
    )
}

export default DelButton
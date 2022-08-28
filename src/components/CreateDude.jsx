import React from 'react'
import DelButton from './UI/del-button/del-button'

const CreateDude = ({setIdToDelete, firstName, middleName, lastName, mMath, mRus, mOther, summ, id }) => {

    return (
        <div data-id={id} className="row">
            <DelButton setIdToDelete={{setIdToDelete, id}}/>
            <div className="dude-info dude-info-left">
                <p>{lastName}</p>
            </div>
            <div className="dude-info">
                <p>{firstName}</p>
            </div>
            <div className="dude-info">
                <p>{middleName}</p>
            </div>
            <div className="dude-info">
                <p>{mRus}</p>
            </div>
            <div className="dude-info">
                <p>{mMath}</p>
            </div>
            <div className="dude-info">
                <p>{mOther}</p>
            </div>
            <div className="dude-info dude-info-right">
                <p>{summ}</p>
            </div>
        </div>
    )
}

export default CreateDude
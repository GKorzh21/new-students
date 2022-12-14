import React from 'react'
import DelButton from './UI/DelButton/DelButton'

const CreateDude = ({setModal, firstName, middleName, lastName, mMath, mRus, mOther, summ, id }) => {

    return (
        <div data-id={id} className="row">
            <DelButton setModal={setModal}/>
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
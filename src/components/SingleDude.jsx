import React from 'react'
import DelButton from './UI/del-button/DelButton'

const SingleDude = ({setIdToDelete, firstName, middleName, lastName, mMath, mRus, mOther, summ, id }) => {

    const hoverOn = (e) => {
        e.target.parentNode.classList.add('del-btn-hover-on')
        e.target.parentNode.classList.remove('del-btn-hover-off')
    }

    const hoverOff = (e) => {
        e.target.parentNode.classList.remove('del-btn-hover-on')
        e.target.parentNode.classList.add('del-btn-hover-off')
    }

    return (
        <div data-id={id} className="row">
            <DelButton
                setIdToDelete={setIdToDelete}
                id={id}
                onMouseEnter={(e) => hoverOn(e)}
                onMouseLeave={(e) => hoverOff(e)}
            />
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

export default SingleDude
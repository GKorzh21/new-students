import React from 'react'

const PostForm = ({list, setList}) => {

    const addDude = (e) => {
        const inputList = e.target.parentNode.childNodes 
        let ok = true
        for (let i=0;i<inputList.length-1;i++) {
            let thisIpt = inputList[i].value
            if (thisIpt === '') {
                ok = false
            }
        }

        let newDude = {
            "mOther": +(inputList[5].value), 
            "mRus": +(inputList[3].value), 
            "lastName": inputList[0].value, 
            "summ": +(inputList[3].value) + +(inputList[4].value) + +(inputList[5].value), 
            "id": "", 
            "mMath": +(inputList[4].value), 
            "firstName": inputList[1].value, 
            "middleName": inputList[2].value
        }

        if (ok) 
        {
            alert('ВСЕ НОРМАЛЬНО')
            list.push(newDude)
            setList(list)
            console.log(setList, list)
        }

        else {
            alert('ПОЛЯ ЗАПОЛНЕНЫ НЕ КОРРЕКТНО')
        }
    }

    return (
        <div class="content">
            <p className="input-text">Введите ФИО и баллы по соответствующим экзаменам</p>
            <div id="inp-block" className="inp-block">
                <input id="surname" type="text" placeholder="Фамилия"/>
                <input id="name" type="text" placeholder="Имя"/>
                <input id="otch" type="text" placeholder="Отчество"/>
                <input id="mark-rus" type="text" placeholder="Русский"/>  
                <input id="mark-math" type="text" placeholder="Математика"/>  
                <input id="mark-other" type="text" placeholder="Доп.экзамен"/>  
                <input className="add" onClick={(e) => addDude(e)} value="Добавить" type="button"/>
            </div>
        </div>
    )
}

export default PostForm
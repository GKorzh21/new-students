import React from 'react'

const PostForm = () => {
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
                <input id="add" className="add" value="Добавить" onclick="addDude()" type="button"/>
            </div>
        </div>
    )
}

export default PostForm
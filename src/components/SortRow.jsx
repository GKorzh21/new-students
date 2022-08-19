import React from 'react'
import Sort from './Sort'

const SortRow = () => {
    return (
        <div className="sort-row">
            <Sort value='Фамилия' id=''/>
            <Sort value='Имя'/>
            <Sort value='Отчество'/>
            <Sort value='Русский'/>
            <Sort value='Математика'/>
            <Sort value='Доп.экзамен'/>
            <Sort value='Сумма'/>
        </div>
    )
}

export default SortRow
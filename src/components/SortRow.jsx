import React from 'react'
import Sort from './Sort'

const SortRow = (list) => {
    const SortCol = () => {
        console.log('e')
    }

    return (
        <div className="sort-row">
            <Sort onClick={SortCol()} value='Фамилия'/>
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
import clsx from 'clsx'
import React, { useState } from 'react'

import style from './Pagination.module.css'

function Pagination( {currentPage = 1, totalPage , gotoPage = 1} ) {
    let [page, setPage] = useState(currentPage)

    // create btns
    let totalBtn = totalPage && totalPage > 5 ? 5 : totalPage
    let minPage = currentPage - Math.floor((totalBtn - 1) / 2)
    let maxPage = currentPage + Math.floor((totalBtn) / 2)
    if (minPage < 1) {
        minPage = 1
        maxPage = minPage + totalBtn - 1
    }
    else if (maxPage > totalPage) {
        maxPage = totalPage
        minPage = maxPage - totalBtn + 1
    }

    let btns = [...Array(totalBtn).keys()]
        .map(i => i + minPage)
        .map(i => 
            <li className={clsx(style.btn, { [style.btnActive]: i === currentPage })}>
                {i}
            </li>)

    const handleChange = e => setPage(e.target.value)
    
    return (
        <div className={style.pagination}>
            <h3>{`Trang ${currentPage} trên ${totalPage}`}</h3>
            <ul className={style.btns}>
                <li className={clsx(style.left, style.btn, {[style.btnDisabled]: minPage === 1})}></li>
                    {btns
                    }
                <li className={clsx(style.right, style.btn, {[style.btnDisabled]: maxPage === totalPage})}></li>
            </ul>
            <label className={style.input}>
                <span>Đi tới trang:</span>
                <input type="number" value={page} min={1} max={totalPage} onChange={handleChange} />
                <button>Đi</button>
            </label>
        </div>
    )
}

export default Pagination;
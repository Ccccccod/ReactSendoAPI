import { useState } from 'react'

import style from './TopResultPanel.module.css'

function TopResultPanel({ productAmount }) {
    return (
        <div className={style.topResultPanel}>
            <div className={style.titleBox}>
                <h1>Điện thoại - Máy tính bảng</h1>
                <span class="productCount_N09r">
                    (Tìm thấy&nbsp;<strong class="text-primary">{productAmount}</strong>&nbsp;sản phẩm)
                </span>
                <div className={style.hr}></div>
            </div>
        </div>
    )
}

export default TopResultPanel;
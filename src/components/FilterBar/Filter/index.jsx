import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import style from './Filter.module.css'

// https://searchlist-api.sendo.vn/web/categories/2901/products?is_mega_voucher=1&listing_algo=algo13&page=1&platform=web&size=60&sortType=vasup_desc
// 

function Filter( {title, expand = true, children} ) {
    let [isOpen, setExpand] = useState(!expand)

    useEffect(() => setExpand(!isOpen), [])

    const collapsible = useRef()

    const handleExpand = () => setExpand(!isOpen)
    return (
        <div className={style.filter}>
            {/* Header */}
            <div className={style.header} onClick={handleExpand}>
                <h4 className={style.title}>{title}</h4>
                <span className={clsx(style.icon, isOpen ? style.expandIcon : style.collapseIcon)}></span>
            </div>

            {/* Children */}
            <div className={clsx(style.collapsible, { [style.show]: isOpen })}
                style={
                    isOpen && collapsible?.current
                        ? { height: collapsible.current.scrollHeight + 'px', }
                        : { height: 0 }
                }
                ref={collapsible}
            >
                {children}
            </div>
        </div>
    )
}

export default Filter;
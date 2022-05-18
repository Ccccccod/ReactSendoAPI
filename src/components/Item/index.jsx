import React from 'react'
import style from './Product.module.css'

function Item({ item }) {
    let salePrice = item.sale_price_min === item.sale_price_max ? item.sale_price_min + 'đ' : item.sale_price_min + 'đ' + ' - ' + item.sale_price_max + 'đ'
    let defaultPrice = ''
    if (item.sale_price_max < item.default_price_max)
        defaultPrice = item.default_price_min === item.default_price_max ? item.default_price_min + 'đ' : item.default_price_min + 'đ' + ' - ' + item.default_price_max + 'đ'
    const stars = '\u2605\u2605\u2605\u2605\u2605'
    return (
        <div className={style.item}>
            <div className={style.card}>
                <div className={style.thumbnail}>
                    <img src={item.image} alt="" />
                </div>
                <div className={style.caption}>
                    <h3 className={style.productName}>
                        <span>{item.name}</span>
                    </h3>
                </div>
                <div className={style.productPrice}>
                    <div className={style.currentPrice}>{salePrice}</div>
                    <div className={style.defaultPrice}>{defaultPrice}</div>
                </div>
                <div className={style.info}>
                    <div className={style.voted}>
                        {item.rated?.star !== undefined && <>
                            <p style={{ background: `linear-gradient(90deg,#e5101d ${item.rated.star / 5 * 100}%,#c7c7cd 0)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                                {stars}
                            </p>
                            <p style={{ marginLeft: 6 }}>{item?.rated?.total !== undefined ? '(' + item.rated.total + ')' : ''}</p>
                        </>}
                    </div>
                    {item?.sold !== undefined && <span className={style.orderCount}>
                        <svg width="1em" height="1em" viewBox="0 0 32 32" class="icon_Mf-x iconSmall_2eXS">
                            <path d="M27.292 15.496l-10.8-10.8A2.378 2.378 0 0014.808 4H6.4C5.08 4 4 5.08 4 6.4v8.4c0 .66.264 1.26.708 1.704l10.8 10.8A2.385 2.385 0 0017.2 28h.012c.658 0 1.253-.271 1.679-.708l8.4-8.4a2.342 2.342 0 00.708-1.68v-.013.001c0-.66-.276-1.272-.708-1.704zM8.2 10c-.996 0-1.8-.804-1.8-1.8s.804-1.8 1.8-1.8 1.8.804 1.8 1.8S9.196 10 8.2 10z"></path>
                        </svg>
                        <span>{item.sold}</span>
                    </span>}
                </div>
                <div className={style.footer}>
                    <span>{item.shop.name}</span>
                    <span>{item.shop.ware_house_region_name}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
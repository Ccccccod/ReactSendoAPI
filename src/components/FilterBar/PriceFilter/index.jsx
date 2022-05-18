import clsx from "clsx";
import { useState, useEffect } from "react";
import Filter from "../Filter";
import style from './PriceFilter.module.css'

const KEY = 'levelPrice'

const toReadablePrice = (gt, lt) =>
    gt !== -1 && lt !== -1 ? gt + ' ~ ' + lt
        : gt !== -1 ? 'Trên ' + gt
            : 'Dưới ' + lt

function PriceFilter({ filter, addRule, removeRuleIf, ...props }) {
    let [gtprice, setGtprice] = useState(-1)
    let [ltprice, setLtprice] = useState(-1)
    const resetState = () => {
        setGtprice(-1)
        setLtprice(-1)
    }
    const removeRule = () => removeRuleIf(rule => rule.attribute_key === KEY)
    useEffect(() => {
        // remove old rule
        removeRule()
        // add new rule
        const options = filter?.attribute_value
        if (options?.length) {
            for(let i = 0; i < options.length; i++) {
                const option = options[i]
                if (option.gtprice === gtprice && option.ltprice === ltprice) {
                    const newRule = {
                        attribute_key: KEY,
                        gtprice,
                        ltprice,
                        name: toReadablePrice(gtprice, ltprice),
                        remove() {
                            removeRule()
                            resetState()
                        },
                        addToParam(params) {
                            if (gtprice > -1)
                                params.gtprice = gtprice;
                            if (ltprice > -1)
                                params.ltprice = ltprice;
                        },
                    }
                    addRule(newRule)
                    break;
                }
            }
        }
    }, [gtprice, ltprice])

    return (
        <Filter title={filter.attribute_name} {...props}>
            <div className={style.container}>
                <div className={style.inputs}>
                    <input className={style.input} type="number" min={0} name="ltprice" placeholder="Thấp nhất" value={gtprice !== -1 ? gtprice : ''} onChange={e => setGtprice(e.target.value)} />
                    <div className={style.rightArrow}>
                        <div className={style.icon}></div>
                    </div>
                    <input className={style.input} type="number" min={0} name="gtprice" placeholder="Cao nhất" value={ltprice !== -1 ? ltprice : ''} onChange={e => setLtprice(e.target.value)} />
                </div>
                <div className={style.priceFilters}>
                    {
                        !!filter?.attribute_value
                        && Array.isArray(filter.attribute_value)
                        && filter.attribute_value.map(({ gtprice: gt, ltprice: lt }, index) => (
                            <button
                                className={clsx({ [style.btnActive]: (gtprice === gt && ltprice === lt) })}
                                onClick={(e) => {
                                    if (e.target.classList.contains(style.btnActive)) {
                                        resetState()
                                    } else {
                                        setGtprice(gt)
                                        setLtprice(lt)
                                    }
                                }}
                            >
                                {toReadablePrice(gt, lt)}
                            </button>
                        ))
                    }
                </div>
            </div>
        </Filter>
    )
}

export default PriceFilter;

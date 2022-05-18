import React, { useState, cloneElement, useEffect } from 'react'

import style from './FilterBar.module.css'
import { DELETE_SIGN } from '../../constants'
import GeneralFilter from './GeneralFilter'
import CheckboxFilter from './CheckboxFilter'
import PriceFilter from './PriceFilter';
import axios from 'axios'

function FilterBar({ filters = [], setProducts, ...props }) {

    // Rules to filter
    // expect elements to be objects with:
    // - 'name' attribute to display
    // - 'remove()' func to remove from rules
    // - 'addToParam(params)'
    let [rules, setRules] = useState([])

    const addRule = rule => {
        // Treat state as immutable. Create new array.
        setRules(prevRules => [...prevRules, rule])
    }

    const removeRuleIf = callback => {
        setRules(prevRules => prevRules.filter((rule, index) => !callback(rule, index)))
    }

    const clearRules = () => {
        rules.forEach(rule => rule.remove())
        setRules([])
    }
    
    const generalTermFilters = [];
    const filterComponents = [];
    filters.map((filter) => {
        if (!filter) return null;
        switch (filter?.attribute_term) {
            case 'GeneralTerm':
                if (filter?.position !== 'top')
                generalTermFilters.push(filter)
                break;
            case 'DefaultTerm':
                filterComponents.push(
                    <CheckboxFilter
                        filter={filter}
                        rules={rules}
                        addRule={addRule}
                        removeRuleIf={removeRuleIf}
                        {...props}
                    />)
                break;
            case 'PriceTerm':
                filterComponents.push(
                    <PriceFilter
                        filter={filter}
                        addRule={addRule}
                        removeRuleIf={removeRuleIf}
                        {...props}
                    />)
                break;
            default:
                // term not supported
                return null;
        }
    })

    const displayedRules = rules.filter(rule => rule.isInvisible)

    return (
        <div className={style.filterBar}>
            {/* Filtered */}
            {rules.length > 0 &&
                <div className={style.filtered}>
                    <div className={style.header}>
                        <h4 className={style.title}>Đã lọc <span>{`(${rules.length})`}</span></h4>
                        <h4 className={style.unselect} onClick={clearRules}>Bỏ chọn hết</h4>
                    </div>
                    <div className={style.filteredItemContainer}>
                        {rules.map(rule =>
                            <div className={style.filteredItem} onClick={() => rule.remove()}>
                                <p>{rule.name}</p>
                                <p className={style.delete}>{DELETE_SIGN}</p>
                            </div>
                        )}
                    </div>
                </div>
            }

            {/* Filt btn */}
            <button className={style.filt} onClick={() => {
                let params = {
                    category_id: 1663,
                    platform: 'web',
                    sortType: 'vasup_desc',
                }
                rules.forEach(rule => rule.addToParam(params))

                axios.get('api/web/categories/1663/products?listing_algo=algo13&page=1&platform=web&size=60&sortType=vasup_desc', {
                    params
                })
                    .then(response => {
                        console.log(response)
                        setProducts(response.data)
                    })
                    .catch((error) => {
                        console.log('error', error)
                    })

            }}>
                Tìm kiếm
            </button>

            {/* Filters */}
            <GeneralFilter options={generalTermFilters} rules={rules} addRule={addRule} removeRuleIf={removeRuleIf} />
            {filterComponents}
        </div>
    )
}

export default FilterBar;


// export default function( {params: paramsProp, children} ) {
//     let [params, setParams] = useState({...paramsProp})
//     useEffect(() => setParams(paramsProp), [paramsProp])
//     const setParam = (key, value, name = value) => setParams(prevParams => ({
//         ...prevParams,
//         [key]: {name, value},
//     }));
//     const removeParam = (key) => setParams(prevParams => ({
//         ...prevParams,
//         [key]: {...prevParams[key], value: undefined},
//     }));
//     const clearParams = () => setParams(prevParams => Object.keys(prevParams).reduce(
//         (prev, key) => Object.assign(prev, {
//             [key]: {...prevParams[key], value: undefined}
//         }),
//         {}
//     ))

//     const filtered = Object.keys(params)
//         .filter(key => !!params[key]?.value)
//     return (
//         <div className={style.filterBar}>

//             {/* Filtered */}
//             {filtered?.length > 0 && <div className={style.filtered}>
//                 <div className={style.header}>
//                     <h4 className={style.title}>Đã lọc <span>{`(${filtered.length})`}</span></h4>
//                     <h4 className={style.unselect} onClick={clearParams}>Bỏ chọn hết</h4>
//                 </div>
//                 <div className={style.filteredItemContainer}>
//                     {filtered
//                         .map(key => ({ key, ...params[key] }))
//                         .map(({ key, name }) => (
//                             <div className={style.filteredItem} onClick={() => removeParam(key)}>
//                                 <p>{name}</p>
//                                 <p className={style.delete}>{DELETE_SIGN}</p>
//                             </div>
//                     ))}
//                 </div>
//             </div>}

//             {/* Pass props to children */}
//             {!!children && children.map(child => cloneElement(child, {params: params, setParam, removeParam} ))}
//         </div>
//     )
// }
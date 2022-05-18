import React, { useEffect, useState } from 'react'

import style from './CheckboxFilter.module.css'
import Filter from '../Filter'

// Default filter.
function CheckboxFilter({ filter, rules, addRule, removeRuleIf, ...props }) {

    const isChecked = option => {
        return rules
            .filter(i => i)
            .some(rule => rule.attribute_key === filter.attribute_key &&
                rule?.option_id === option?.option_id &&
                rule?.option_name === option?.option_name)
    }

    return (
        <Filter title={filter.attribute_name} {...props}>
            {!!filter?.attribute_value &&
                Array.isArray(filter.attribute_value) &&
                filter.attribute_value
                .filter(i => i)
                .map(option => 
                    <label className={style.option}>
                        <input type="checkbox"
                            name={filter.attribute_key}
                            className={style.input}
                            checked={isChecked(option)}
                            onChange={({ target: { checked } }) => {
                                const remove = () => {
                                    removeRuleIf(rule => rule.attribute_key === filter.attribute_key &&
                                        rule.option_id === option.option_id &&
                                        rule.option_name === option.option_name)
                                }
                                if (checked &&
                                        rules.every(rule => rule.attribute_key !== filter.attribute_key ||
                                        rule?.option_id !== option?.option_id ||
                                        rule?.option_name !== option?.option_name)
                                    ) {
                                    const rule = {
                                        attribute_key: filter.attribute_key,
                                        option_id: option.option_id,
                                        option_name: option.option_name,
                                        name: option.option_name,
                                        remove,
                                        addToParam(params) {
                                            if (params[filter.attribute_key]) {
                                                params[filter.attribute_key] += ',' + this.option_id
                                            } else {
                                                params[filter.attribute_key] = this.option_id
                                            }
                                        },
                                    }
                                    console.log(isChecked(option))
                                    addRule(rule)
                                } else {
                                    remove()
                                }
                            }}
                        />
                        <span>{option.option_name}</span>
                    </label>
                )
            }
        </Filter>
    )
}

// function CheckboxFilter({ keys, params: paramsProp, setParam, removeParam, ...props }) {
//     let [params, setParams] = useState(paramsProp)
//     useEffect(() => setParams(paramsProp), [paramsProp])
//     return (
//         <Filter {...props}>
//             {
//                 keys.filter(key => params.hasOwnProperty(key))
//                     .map(key => {
//                         const value = params[key].value
//                         const name = params[key]?.name || value
//                         return (
//                             <label className={style.option}>
//                                 <input type="checkbox"
//                                     name={key}
//                                     key={value} // to update when value changes
//                                     className={style.input}
//                                     checked={!!value}
//                                     onChange={({ target: { checked } }) => {
//                                         setParam(key, value ? undefined : true, name)
//                                     }}
//                                 />
//                                 <span>{name}</span>
//                             </label>
//                         )
//                     })
//             }
//         </Filter>
//     )
// }

export default CheckboxFilter;
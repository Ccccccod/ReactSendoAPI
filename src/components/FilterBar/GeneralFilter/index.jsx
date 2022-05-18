import style from '../CheckboxFilter/CheckboxFilter.module.css'
import Filter from '../Filter'

function GeneralFilter({ options, rules, addRule, removeRuleIf, ...props }) {
    const isChecked = ({ attribute_term, attribute_name, attribute_key }) => (
        rules.some(rule =>
            rule.attribute_term === attribute_term
            && rule.attribute_name === attribute_name
            && rule.attribute_key === attribute_key)
    )
    const remove = ({ attribute_term, attribute_name, attribute_key }) => {
        removeRuleIf(rule =>
            rule.attribute_term === attribute_term
            && rule.attribute_name === attribute_name
            && rule.attribute_key === attribute_key)
    }
    return (
        <Filter title="Bộ lọc sản phẩm" {...props} >
            {
                options.map(({ attribute_term, attribute_name, attribute_key, attribute_value: { [attribute_key]: value } }) => 
                    <label className={style.option}>
                        <input
                            className={style.input}
                            type="checkbox"
                            name={attribute_key}
                            value={value}
                            checked={isChecked({ attribute_term, attribute_name, attribute_key })}
                            onClick={({ target: { checked } }) => {
                                if (checked) {
                                    const newRule = {
                                        attribute_term,
                                        attribute_name,
                                        attribute_key,
                                        name: attribute_name,
                                        remove() {
                                            remove({ attribute_term, attribute_name, attribute_key })
                                        },
                                        addToParam(params) {
                                            params[attribute_key] = value
                                        }
                                    }
                                    addRule(newRule)
                                } else {
                                    remove({ attribute_term, attribute_name, attribute_key })
                                }
                            }}
                        />
                        <span>{attribute_name}</span>
                    </label>
                )
            }
        </Filter>
    )
}

export default GeneralFilter;
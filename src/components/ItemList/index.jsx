import React from 'react'

import Item from '../Item'
import TopResultPanel from './TopResultPanel';

function ItemList({ products }) {
    return (
        <div>
            <TopResultPanel productAmount={products?.meta_data?.total_count} />
            <ul style={{
                // maxWidth: '100%',
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '8px',

                flexGrow: 0,
            }}>
                {console.log('products: ')}
                {console.log(products)}
                {!!products?.data && Array.isArray(products.data)
                    && products.data.map((item) => (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>)
                    )}
                {
                    (function() {
                        if (!!products?.data && Array.isArray(products.data))
                            return products.data.map((item) => (
                                <li key={item.id}>
                                    <Item item={item} />
                                </li>))
                        else return <h3>Không tìm thấy sản phẩm</h3>
                    })()
                }
            </ul>
        </div>
    )
}

export default ItemList;
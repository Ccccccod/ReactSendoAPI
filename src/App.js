import axios from 'axios'
import React, { useEffect, useState } from 'react';

// import Sendo from './components/Sendo'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Page from './components/Page'
import Filter from './components/FilterBar/Filter'
import FilterBar from './components/FilterBar'
import CheckboxFilter from './components/FilterBar/CheckboxFilter'
import Pagination from './components/Pagination'
import JumpToTopBtn from './components/JumpToTopBtn';
import Footer from './components/Footer'

import productsJSON from './data/products.js'
import filtersJSON from './data/filters.js'

function App() {
  let [products, setProducts] = useState(productsJSON)
  let [filters, setFilters] = useState(filtersJSON)

  // useEffect(() => {
  //   axios.get('api/web/categories/1663/products?listing_algo=algo13&page=1&platform=web&size=60&sortType=vasup_desc')
  //     .then(res => {
  //       if (res && res.data && res.data.data)
  //       {
  //         res.data.data.forEach(element => {
  //           console.log(element.name)
  //         });
  //         setProducts(res.data.data)
  //       }
  //     })
  //     .catch(e => console.log(e))
  // }, [])

  return (
    <>
      <Header />
      <Page>
        <div style={{ display: 'inline-flex', justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', columnGap: '16px' }}>
          <FilterBar filters={filters.data} setProducts={setProducts} >
            {/* <CheckboxFilter title={'Bộ lọc sản phẩm Bộ lọc sản phẩm'} keys={['key1', 'key2', 'key3']} />
            <CheckboxFilter title={'Bộ lọc sản phẩm'} keys={['key4', 'key5']} /> */}
          </FilterBar>
          <ItemList products={products} />
        </div>
        <Pagination
          currentPage={products?.meta_data?.current_page}
          totalPage={products?.meta_data?.total_page}
        />
      </Page>
      <JumpToTopBtn />
      <Footer />
    </>
  );
}

export default App;

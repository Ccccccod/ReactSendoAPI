import React from 'react'
import { HEADER_HEIGHT } from '../../constants'

function Page(props) {
    return (
        <div style={{width: '100%', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center'}}>
            <div style={{flex: '0 1 1360px', marginTop: HEADER_HEIGHT, }}>
                {props.children}
            </div>
        </div>
    );
}

export default Page;
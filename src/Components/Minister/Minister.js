import React from 'react';
import {
    Min,
    Give,
    Mpesa,
    Equity, 
    Tag,
    Sub
} from './Minister.elements';

function Minister() {
    return (
        <>
            <Min>
                <Tag>Give Online</Tag>
                <Sub>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quos obcaecati dolores maiores hic distinctio recusandae, excepturi cupiditate iure veritatis nostrum in amet cumque voluptates, laudantium ipsa ut similique aperiam!</Sub>
                <Give>
                    <Mpesa>
                        <h3>Give via Mpesa</h3>
                        <p>Paybill : 258369</p>
                        <p>Account no: Name/District</p>
                    </Mpesa>
                    <Equity>
                        <h3>Give via EquityBank</h3>
                        <p>Paybill : 258369</p>
                        <p>Account no: 78963244512554</p>                    
                    </Equity>
                </Give>
            </Min>
        </>
    )
}

export default Minister

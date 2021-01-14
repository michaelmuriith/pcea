import React from 'react';
import { Button } from '../../Global';
import {
    Serve,
    Guest,
    Prayer,
    Pastrol,
    Qus
} from './Service.elements'

function Service({
    primary,
    buttonLabel,
    primary1,
    buttonLabel1,
    primary2,
    buttonLabel2,
    qus,
    qus1,
    qus2,
}) {
    return (
        <>
            <Serve>
                <Guest>
                    <Qus>{qus}</Qus>
                    <Button big fontBig primary={primary}>
                        {buttonLabel}
                    </Button>
                </Guest>
                <Prayer>
                    <Qus>{qus1}</Qus>
                    <Button big fontBig primary={primary1}>
                        {buttonLabel1}
                    </Button>
                </Prayer>
                <Pastrol>
                    <Qus>{qus2}</Qus>
                    <Button big fontBig primary={primary2}>
                        {buttonLabel2}
                    </Button>
                </Pastrol>
            </Serve>
        </>
    )
}

export default Service

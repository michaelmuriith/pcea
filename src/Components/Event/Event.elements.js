import styled from 'styled-components';
import img from '../../images/church.jpg'

export const EventContainer = styled.div`
    height: 50vh;
    display: flex;
    background: #fff;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        height: fit-content;
    }
`;

export const OrderServie = styled.div`
    padding: 30px;
    text-align: center;
    align-items: center;
    width: 33%;

    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
    }
`;

export const Table = styled.table`
    width: 100%;
    align-items: center;
`
export const Tr = styled.tr`
    width: 100%;
    height: 40px;
`
export const Td = styled.td`
    font-size: 20px;
`
export const Th = styled.th`
    font-size: 20px;
`

export const EventsSchedule = styled.div`
    padding: 30px;
    text-align: center;
    padding: 20px;
    width: 33%;

    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
    }
`;

export const Meetings = styled.div`
    padding: 30px;
    text-align: center;
    padding: 20px;
    width: 33%;

    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
    }
`

export const Schedule = styled.div`

    display: flex;
    height: 50px;
    margin-bottom: 2px;
    margin-top: 15px;
`;
export const Date = styled.div`
    padding-top: 3px;
    background: #011256;
    height: 50px;
    width: 50px;
    border-radius: 15px;
    font-weight: 300;
    justify-content: center;
    font-size: 30px;
    line-height: 20px;
    color: #fff;
`;
export const EventTitle = styled.div`
    margin-left: 10px;
    align-items: center;
    height: 100%;
    width: 80%;
    font-size: 20px;
`;

export const H1 = styled.h1`
    margin-bottom: 10px;
`;
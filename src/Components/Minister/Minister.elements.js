import styled from 'styled-components';

export const Min = styled.div`
    padding: 30px;
    background: #fff;
    text-align: center;
    margin-left: 80px;
    margin-right: 80px;
    @media screen and (max-width: 480px) {
        margin: 0;
    }
`;
export const Give = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
export const Mpesa = styled.div`
    width: 50%;
    font-size: 25px;

    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 20px;
        margin-bottom: 15px;
    }
`;

export const Equity = styled.div`
    width: 50%;
    font-size: 25px;

    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 20px;

    }
`;

export const Tag = styled.h1`
    font-size: 60px;
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Sub = styled.p`
    font-size: 20px;
    margin-bottom: 15px;
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
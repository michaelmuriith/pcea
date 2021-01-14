import styled from 'styled-components';

export const Serve = styled.div`
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        height: fit-content;
    }
`;

export const Guest = styled.div`
    padding: 50px;
    color: #fff;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 480px) {
        width: 95%;
        margin: 0;
        padding: 40px 0 0 0;
    }
`;

export const Prayer = styled.div`
    padding: 50px;
    color: #fff;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 480px) {
        width: 95%;
        margin: 0;
        padding: 40px 0 0 0;
    }
`;

export const Pastrol = styled.div`
    padding: 50px;
    color: #fff;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 480px) {
        width: 95%;
        margin: 0;
        margin-bottom: 40px;
        padding: 40px 0 0 0;
    }
`;

export const Qus = styled.p`
    font-size: 30px;
    margin-bottom: 20px;
`;

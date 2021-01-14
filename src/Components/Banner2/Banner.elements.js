import styled from 'styled-components';
import Img from '../../images/3.jpg';

export const Title = styled.div`
    height: 200px;
    margin-top: -60px;
    background:linear-gradient(180deg, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.671)), url(${Img});
    background-size: 100% 100%;
    text-align: center;
    padding: 100px;
`;
export const Tag = styled.h1`
    font-size: 70px;
    color: #fff;
`;
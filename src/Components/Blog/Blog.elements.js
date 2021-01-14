import styled from 'styled-components';

export const BlogCont = styled.div`
    height: 90vh;
    background: #101522;  
    padding: 30px;
    @media screen and (max-width: 480px) {
        height: fit-content;
        padding-bottom: 10px;
    }
`;
export const BlogContainer = styled.div`
    display: flex;
    background: #101522;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const  BlogItem = styled.div`
    margin: 3%;
    margin-top: 1%;
    margin-bottom: 1%;
    background: #fff;  
    padding: 1px;  
    height: 100%;
    width: 27%;
    border: 1px solid #000;
    border-radius: 5px;
    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 0;
    }
`;
export const  BlogImage = styled.img`
    width: 100%;
    height: 50%;
    position: relative;
`;
export const  PostTime = styled.div`
    margin-left: 10px;
`;
export const  BlogContent = styled.div`
    padding: 20px;
`;
export const  BlogTitle = styled.h3`
    color: #000;
    font-weight: 700;
    margin-bottom: 8px;
`;
export const  BlogDesc = styled.p`
    color: #000;
`;
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro' sans-serif;
    }
`;
export const Container = styled.div`

`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467Fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467Fb' : '#4b59f7' )};
    }

    @media screen and (max-width: 991px){
        width: 100%;
    }
`

export default GlobalStyle;
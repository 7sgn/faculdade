import { styled } from 'styled-components'


const Button = styled.button`
    border: ${ props => props.theme === 'primary' ? 'none' : 'solid 1px'};
    background: ${ props => props.theme === 'primary'
     ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)'
     : 'transparent'};
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover{
    opacity: 0.8;
}

    &:active{
    opacity: 0.6;

}
`
export default Button
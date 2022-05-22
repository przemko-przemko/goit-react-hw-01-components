import styled from "styled-components";

const Wrapper= styled.div`
    display:flex;
    width:50%;
    height:50%;
    border:2px solid gray;
    border-radius: 10px;
    flex-direction: column;
    background-color: #fff;
`;
const Image = styled.img`
    width:205px;
    height: 205px;
    margin:0 auto;
`
const UserParagraph = styled.p`
    color:#465160;
    font-size: 27px;
    font-weight: bold;
`
export { Wrapper,Image,UserParagraph }
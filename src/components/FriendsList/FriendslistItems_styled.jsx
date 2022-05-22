import styled from "styled-components";

const SpanOnline = styled.span`
     margin-right: 70px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: green;
  margin: auto 0;
`
const SpanOffline = styled.span`
     margin-right: 70px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
  margin: auto 0;
`
const ListItem = styled.li`
  border: 4px solid black;
  border-radius: 14px;
  margin: 0 auto;
  max-width: 700px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #fdfdfd;
  transition: 500ms;  
  &:hover{
    background-color: #ffcef3;
  }
`
export { SpanOffline,SpanOnline,ListItem }
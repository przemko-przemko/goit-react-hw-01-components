import styled from "styled-components";
const Wrapper = styled.section`
    width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`
const List = styled.ul`
     width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0;
`
const ListItem = styled.li`
     color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
`
export {List, Wrapper,ListItem }
import styled from "styled-components";

const List = styled.ul`
    width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 0;
  margin-top: 0;
  list-style: none;
  background-color: #f3f6f9;
  color: #000;
  font-size: 20px;
`
const ListItem = styled.li`
    width: calc(100% * 3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-left: solid;
  border-width: 2px;
  border-color: rgba(158, 158, 158, 0.698);
  box-shadow: 3px 5px 10px rgb(42, 36, 36);
`
export { List, ListItem }
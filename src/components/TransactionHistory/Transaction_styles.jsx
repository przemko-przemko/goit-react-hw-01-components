import styled from "styled-components"

const TheadStyled  = styled.thead`
background-color: rgb(179, 103, 52);
`
const TData = styled.td`
    padding: 15px;
  border: 1px solid rgba(85, 71, 71, 0.561);
`
const TRow = styled.tr`
    :nth-child(even) {
  background-color: #fff
    }
  `
  const Table = styled.table`
      width: 50%;
  font-size: 25px;
  border-collapse: collapse;
  background-color: rgba(196, 171, 104, 0.933);
  color: #001234;
  border: 2px solid rgb(0, 0, 0);
  margin-bottom: 20px;
  `

  export { Table,TRow, TData, TheadStyled }
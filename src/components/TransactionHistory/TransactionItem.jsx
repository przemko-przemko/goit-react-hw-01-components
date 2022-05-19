import React from 'react'
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
    

const THead = ({title}) => {
    console.log(title)
    return(
    <>
        {title === "Transaction History" ? <h2>{title}</h2> : <h2>Error with fetch title</h2> }   
        <TheadStyled>
    <TRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TRow>
  </TheadStyled>
  </>
    )
}
const TBody = ({transaction}) =>{
    return (
     <tbody>
         {transaction.map(({id, type, amount, currency}) =>{
             return(
                <TRow key={id}>
                <TData>{type}</TData>
                <TData>{amount}</TData>
                <TData>{currency}</TData>
              </TRow>
             )
         })}
     </tbody>
    )
}

const TransactionItem = ({transaction, title = ""}) => {
    console.log(transaction)
  return (
      <Table>
   <THead title={title}/>
       <TBody transaction={transaction}/>
   </Table>
  )
}

export default TransactionItem
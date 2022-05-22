import React from 'react'
import { Table,TRow, TData, TheadStyled } from "./Transaction_styles"



    

const THead = ({title}) => {
    console.log(title)
    return(
    <>
         
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
    <>
    {title === "Transaction History" ? <h2>{title}</h2> : <h2>Error with fetch title</h2> }  
      <Table>
        
   <THead title={title}/>
       <TBody transaction={transaction}/>
   </Table>
   </>
  )
}

export default TransactionItem
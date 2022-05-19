import React from 'react'
const THead = () => {
    return(
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    )
}
const TBody = ({transaction}) =>{
    return (
     <tbody>
         {transaction.map(({id, type, amount, currency}) =>{
             return(
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
             )
         })}
     </tbody>
    )
}

const TransactionItem = ({transaction}) => {
    console.log(transaction)
  return (
      <>
   <THead/>
       <TBody transaction={transaction}/>
   </>
  )
}

export default TransactionItem
import React from 'react'
import TransactionItem from './TransactionItem'
import transaction from "./transaction.json"

const Transaction = () => {
  return (
    <TransactionItem transaction={transaction}/>
  )
}

export default Transaction
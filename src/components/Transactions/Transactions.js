import React from 'react'

import s from './Transactions.module.css'

import PropTypes from 'prop-types'




const TransactionTr = ({currency, amount, id, type}, i) => {
const trClassName = i % 2 === 0 ? s.grey : s.white
    return (

      <tr key={id} className={trClassName}>
            <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}


const TransactionBody = ({items}) => {
if(items.length === 0) return null
    return <tbody className={s.tbody}>
    {items.map(TransactionTr)}</tbody>
}

const Transactions = ({transactions}) => {


    return (<table className={s.transactionHistory}>
  <thead className={s.thead}>
    <tr>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
           
            
              <TransactionBody items={transactions} />  
  
</table>

)
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
  
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
})

  )  

  }
  
  
export default Transactions
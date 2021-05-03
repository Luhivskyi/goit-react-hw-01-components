import React from 'react'

import s from './Statistics.module.scss'

const statsListItem = ({id, label, percentage}) => {

return <li key={id} class={item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
}


const StatsList = ({ items }) => {
    if(items.length === 0) return null
    return <ul className={s.StatsList}>{items.map(statsListItem)}</ul>
}


const Statistics = ({items}) => {

    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>

            <StatsList items={ items }/>
</section>
)
}

export default Statistics
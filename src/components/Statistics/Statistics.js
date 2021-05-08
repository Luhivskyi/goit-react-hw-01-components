import React from 'react'
import PropTypes from 'prop-types'

import s from './Statistics.module.css'

const statsListItem = ({id, label, percentage}) => {

return <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
}


const StatsList = ({ items }) => {
    if(items.length === 0) return null
    return <ul className={s.StatsList}>{items.map(statsListItem)}</ul>
}


const Statistics = ({items}) => {

    return (<section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>

            <StatsList items={ items }/>
</section>
)
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),

}
export default Statistics;



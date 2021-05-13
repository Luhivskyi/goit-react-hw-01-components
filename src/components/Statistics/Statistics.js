import React from 'react'
import PropTypes from 'prop-types';
import random from './random';
import s from './Statistics.module.css'

// const StatsListItem = ({id, label, percentage}) => {

// return (<li key={id} className={s.item} style={{ backgroundColor: random() }}>
//       <span className={s.label}>{label}</span>
//       <span className={s.percentage}>{percentage}</span>
//     </li>)
// }


// const StatsList = ({ items }) => {
//     if(items.length === 0) return null
//     return <ul className={s.statList}>{items.map(StatsListItem)}</ul>
// }


const Statistics = ({ items,title }) => {

  return (<section className={s.statistics}>
    {title && <h2 className={s.title}>{title }</h2>}
    
    <ul className={s.statList}>
      {items.map(item => (
        <li key={item.id} className={s.item} style={{ backgroundColor: random() }}>
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}</span>
    </li>
      ))}
    
    </ul>
    {/* <StatsList items={items} /> */}
  </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
  export default Statistics;
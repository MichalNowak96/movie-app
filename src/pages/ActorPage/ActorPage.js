import React from 'react'
import styles from './ActorPage.module.css';
import { Link, useParams } from 'react-router-dom'
const ActorPage = props => {
    const {id} = useParams();
  return (
    <div>
      <Link Link to={`/country/${id}`}>
        <span>{id}</span>
      </Link>
    </div>
  )
}

export default ActorPage

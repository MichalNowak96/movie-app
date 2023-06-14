import React from 'react'
import styles from './DetailsPage.module.css';
import { Link, useParams } from 'react-router-dom'
const DetailsPage = () => {
    const {id} = useParams();
    return (
      <div>
        <Link Link to={`/country/${id}`}>
          <span>{id}</span>
        </Link>
      </div>
    )
}

export default DetailsPage

import React from 'react'
import { Link } from 'react-router-dom'
import {TopChartsLinks} from '../assets/data/data'
import Liked from '../Components/Liked'

function Collection() {
  return (
    <div>
      <Link>
      {TopChartsLinks.map((data) => {
        const {id,images,title,subtitle} =data
        return (
          <Liked
          id={id}
          images={images}
          title={title}
          subtitle={subtitle}
          />
        )
      })}
      </Link>
    </div>
  )
}

export default Collection

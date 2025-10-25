import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams()
  console.log(params)

  return (
    <h1> {params.id} Course Detail </h1>

  )
}

export default CourseDetail
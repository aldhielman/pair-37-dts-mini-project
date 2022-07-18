import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    let params = useParams()
  return (
    <div>Detail {params.id}</div>
  )
}

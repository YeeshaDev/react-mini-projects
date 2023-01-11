import React from 'react'
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from '../redux/services/Api';

function TopChart() {
  const {activeSong,isPlaying} = useSelector((state) => state.player)
  const {data,isFetching,error} = useGetTopChartsQuery();
  return (
    <div>TopChart</div>
  )
}

export default TopChart
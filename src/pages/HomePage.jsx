import React,{ useEffect, useState } from 'react'
import { MemeCard } from '../components/MemeCard';
import { getAllMemes } from '../api/memes'

export default function HomePage() {
    const [data,setData]=useState([]);

    useEffect(() => {
        getAllMemes().then((memes) => setData(memes.data.memes));
    },[])
  return (
    <div>
      <div className="row">
        {data.map((element) => (
          <MemeCard key={element.id} img={element.url} title={element.name} />
        ))}
      </div>
    </div>
    
  )
}

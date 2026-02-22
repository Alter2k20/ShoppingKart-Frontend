import {usestate, useEffect} from 'react'

export default function Carousel(){
    const [index, SetIndex] = useEffect(0);

    useEffect(()=>{
        const interval = 
        setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 5000);
    },[])

    return (
    <div className="overflow-hidden w-full max-w-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full shrink-0"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
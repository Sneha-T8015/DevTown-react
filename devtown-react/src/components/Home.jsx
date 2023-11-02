import React ,{useState} from 'react'
import Carousel from './Carousel'
import CardsRender from './CardsRender'

export default function Home() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <div>
        
        <Carousel/>
        <CardsRender setCartCount={setCartCount} />

    </div>
  )
}

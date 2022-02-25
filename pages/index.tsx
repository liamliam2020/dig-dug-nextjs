import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { canvasHeight, canvasWidth, drawSprit, initializeBoard } from '../scripts/Canvas'

//TODO interfaces for ts will be cleaner

const Home: NextPage = () => {

  // Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Game States
  const [taizoHori, setTaizoHori] = useState<{location: { x: number; y: number }}>({
    location: { x: 10, y: 3 }
  })

  // Game Hook
  useEffect(() => {
    const canvas = canvasRef?.current
    const ctx = canvas?.getContext('2d')

    initializeBoard(ctx)
    drawSprit(ctx, taizoHori.location.x, taizoHori.location.y)

  }, [])

  return (
    <div>
      <canvas 
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      />
      Dig Dug
    </div>
  )
}

export default Home

// Planning;

// next.js game resource -> https://github.com/marcmll/next-snake
// gameboard: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
// character is 2 blocks wide and each 2 block section is a little sliver of a block
// for the levels I want to come up with some kinda of randomzier that will place a certian number oif air holes and enemies
// around based on luck and maybe the number of levels played to get progressivly harder
// will need some kind of game speed for when the player gets further in the game
// -> more on that here: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// ^^ pop in his useInterval hook looks very nice

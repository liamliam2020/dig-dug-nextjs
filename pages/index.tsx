import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { canvasHeight, canvasWidth, drawSprit, initializeBoard } from '../scripts/Canvas'

//TODO interfaces for ts will be cleaner

interface Location {
  location: {
    x: number,
    y: number
  }
}

const Home: NextPage = () => {
  // TODO is this the best way to use lodash????
  var _ = require('lodash')

  // Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Game States
  const [taizoHori, setTaizoHori] = useState<Location>({
    location: {
      x: 10, 
      y: 3
    }
  })

  // Game Hook
  useEffect(() => {
    const canvas = canvasRef?.current
    const ctx = canvas?.getContext('2d')

    initializeBoard(ctx)
    drawSprit(ctx, taizoHori.location.x, taizoHori.location.y)

  }, [taizoHori])

  // Event Listener: Key Presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight'
        ].includes(e.key)
      ) {
        let currentLocation = _.cloneDeep(taizoHori)

        switch (e.key) {
          case 'ArrowRight':
            currentLocation.location.x = currentLocation.location.x + 1
            break
          case 'ArrowLeft':
            currentLocation.location.x = currentLocation.location.x - 1
            break
          case 'ArrowDown':
            currentLocation.location.y = currentLocation.location.y + 1
            break
          case 'ArrowUp':
            currentLocation.location.y = currentLocation.location.y - 1
            break
          default:
            console.error('Error with handleKeyDown')
        }

        setTaizoHori(currentLocation)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [taizoHori])

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

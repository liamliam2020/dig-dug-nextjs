export const canvasWidth = 700
export const canvasHeight = 800
const canvasGridSize = 10 // not conviced i need this

export const fillRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
) => {
  ctx.fillRect(x, y, w, h)
}

// This method will need to create the starting board and pop it with all the things 
export const initializeBoard = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = '#FF0000'
  ctx.strokeStyle = '#003779'

  for (var i = 1; canvasWidth - 1 > i; i++) {
    for (var j = 1; canvasHeight - 1 > j; j++) {
      fillRect(
        ctx,
        i * canvasGridSize,
        j * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
    }
  }
}

// Will use this to move digdug and all the spirts too
export const drawSprit = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.fillStyle = '#000000'
  ctx.strokeStyle = '#003779'

      fillRect(
        ctx,
        x * canvasGridSize,
        y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
}
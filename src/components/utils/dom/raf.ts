let prev = Date.now()

function fallback(fn: FrameRequestCallback): number {
  const curr = Date.now()
  const ms = Math.max(0, 16 - (curr - prev))
  const id = setTimeout(fn, ms)
  prev = curr + ms
  return id
}

/* istanbul ignore next */
const root = window as Window

/* istanbul ignore next */
const iRaf = root.requestAnimationFrame || fallback

/* istanbul ignore next */
const iCancel = root.cancelAnimationFrame || root.clearTimeout

export function raf(fn: FrameRequestCallback): number {
  return iRaf.call(root, fn)
}

// double raf for animation
export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => {
    raf(fn)
  })
}

export function cancelRaf(id: number) {
  iCancel.call(root, id)
}

import { useEffect, useState } from 'react'

export const useScreenHorizontal = () => {
  const [isScreenHorizontal, setIsScreenHorizontal] = useState(false)
  useEffect(() => {
    // reminder: hard coded breakpoint md tailwind css - has to be changed if tailwind.config.ts is changed
    const mdMediaQuery = window.matchMedia('(min-width: 768px)')
    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setIsScreenHorizontal(matches)
    }

    onMediaQueryChange(mdMediaQuery)
    mdMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      mdMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  return [isScreenHorizontal]
}

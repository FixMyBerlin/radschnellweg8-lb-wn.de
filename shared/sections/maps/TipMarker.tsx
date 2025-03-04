import { clsx } from 'clsx'
import type { JSX } from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & { anchor: 'bottom' | 'top' }

const createSvg = (style: any, rotation: number, path: JSX.Element) => {
  return (
    <svg
      style={{
        position: 'absolute',
        width: 15,
        height: 15,
        ...(rotation ? { transform: `rotate(${rotation}deg)`, transformOrigin: 'top left' } : {}),
        ...style,
      }}
    >
      {path}
    </svg>
  )
}

const pathProps = { stroke: '#E5E7EB', strokeWidth: '1', fill: 'white' }
const pathSide = <path d="M 0 15 L 5 0 L 10 15" {...pathProps} />

const tipElements = {
  bottom: createSvg({ top: 0, left: -5 }, 0, pathSide),
  top: createSvg({ top: 0, left: 5 }, 180, pathSide),
}

const shadow = { boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25)' }
const divStyles = {
  bottom: { ...shadow, top: 14, left: 0, transform: 'translateX(-50%)' },
  top: { ...shadow, bottom: 14, left: 0, transform: 'translateX(-50%)' },
}

export const TipMarker: React.FC<Props> = ({ className, anchor, children, ...props }) => {
  return (
    <div className={clsx('cursor-pointer whitespace-nowrap', className)} {...props}>
      <div
        style={divStyles[anchor]}
        className="absolute rounded-md border border-gray-200 bg-white"
      >
        {children}
      </div>
      {tipElements[anchor]}
    </div>
  )
}

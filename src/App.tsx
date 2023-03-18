import { FC } from 'react'
import { layers } from './data/layers'

const CELL_WIDTH = 200
// const CONTENT_WIDTH = CELL_WIDTH * layers.length

export const App: FC = () => {
  return (
    <div className="container">
      <div className="content">
        {layers.map((layer) => (
          <div
            key={layer.name}
            style={{ display: 'inline-block', width: `${CELL_WIDTH}px` }}
          >
            {/* <div style={{ textAlign: 'center', textTransform: 'lowercase' }}>
              {layer.name}
            </div> */}
            <img src={layer.src} alt={layer.name} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

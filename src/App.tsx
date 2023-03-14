import { FC } from 'react'
import { layers } from './data/layers'

export const App: FC = () => (
  <div className="scroll-container">
    <div className="scroll-content">
      <div className="levels">
        {layers.map((layer) => (
          <div key={layer.name} className="level">
            <div className="image" />
            <span className="label">{layer.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

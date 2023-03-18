import { FC } from 'react'
import { layers } from './data/layers'

export const App: FC = () => (
  <div className="scroll-container">
    <div className="scroll-content">
      <div className="levels">
        {layers.map((layer) => (
          <div key={layer.name} className="level">
            <div className="label">{layer.name}</div>
            <div className="image">
              <img src={layer.src} alt={layer.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

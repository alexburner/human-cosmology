import { FC } from 'react'
import { layers } from './data/layers'

const exceptions = new Set(['Biomolecules', 'Organs'])
const beginning = layers[0]

if (!beginning) throw new Error('Unreachable')

export const App: FC = () => (
  <div className="container">
    <div className="columns">
      <div className="column left">
        {layers
          .filter((_, i) => i > 0 && i < 9)
          .reverse()
          .map((layer) => (
            <div className="media" key={layer.name}>
              <img
                className={exceptions.has(layer.name) ? 'exception' : ''}
                src={layer.src}
                alt={layer.name}
              />
              <div className="label">{layer.name}</div>
            </div>
          ))}
      </div>
      <div className="column right">
        {layers
          .filter((_, i) => i > 8)
          .map((layer) => (
            <div className="media" key={layer.name}>
              <img
                className={exceptions.has(layer.name) ? 'exception' : ''}
                src={layer.src}
                alt={layer.name}
              />
              <div className="label">{layer.name}</div>
            </div>
          ))}
      </div>
    </div>
    <div className="beginning">
      <div className="media">
        <img className="exception" src={beginning.src} alt={beginning.name} />
        <div className="label left">Big</div>
        <div className="label right">Bang</div>
      </div>
    </div>
  </div>
)

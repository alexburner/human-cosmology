import { FC } from 'react'
import { Layer, layers } from './data/layers'

const exceptions = new Set(['Biomolecules', 'Organs'])
const beginning = layers[0]

if (!beginning) throw new Error('Unreachable')

export const App: FC = () => (
  <div className="container">
    <h1>You Are Here</h1>
    <div className="columns">
      <div className="column left">
        {layers
          .filter((_, i) => i > 0 && i < 9)
          .reverse()
          .map((layer) => (
            <Cell key={layer.name} layer={layer} />
          ))}
      </div>
      <div className="column right">
        {layers
          .filter((_, i) => i > 8)
          .map((layer) => (
            <Cell key={layer.name} layer={layer} />
          ))}
      </div>
    </div>
    <div className="beginning">
      <Cell layer={beginning} />
    </div>
  </div>
)

const Cell: FC<{ layer: Layer }> = ({ layer }) => (
  <div className="cell">
    <div className="media">
      <img
        className={exceptions.has(layer.name) ? 'exception' : ''}
        src={layer.src}
        alt={layer.name}
      />
    </div>
    <div className="label">{layer.name}</div>
  </div>
)

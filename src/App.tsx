import { FC } from 'react'
import { beginning, emergeOutOf, emergeWithin, Layer } from './data/layers'

export const App: FC = () => (
  <div className="container">
    {new Array(8).fill(null).map((_, i) => {
      const index = 8 - i - 1
      const layerIn = emergeWithin[index]
      const layerOut = emergeOutOf[index]
      if (!layerIn || !layerOut) throw new Error('Unreachable')
      return (
        <div key={i} className="row">
          <Cell layer={layerIn} />
          <Cell layer={layerOut} />
        </div>
      )
    })}
    <div className="beginning">
      <Cell layer={beginning} />
    </div>
  </div>
)

const Cell: FC<{ layer: Layer }> = ({ layer }) => (
  <div className={`cell ${classerize(layer.name)}`}>
    <div className="media">
      <img src={layer.src} alt={layer.name} />
    </div>
    <div className="label">{layer.name}</div>
  </div>
)

const classerize = (text: string) => text.toLowerCase().replace(' ', '-')

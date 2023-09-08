import { FC } from 'react'
import { beginning, emergeOutOf, emergeWithin, Layer } from './data/layers'

export const App: FC = () => (
  <div className="container">
    <div className="beginning">
      <Cell layer={beginning} />
    </div>
    {new Array(8).fill(null).map((_, i) => {
      const layerIn = emergeWithin[i]
      const layerOut = emergeOutOf[i]
      if (!layerIn || !layerOut) throw new Error('Unreachable')
      return (
        <div key={i} className="row">
          <Cell side="left" layer={layerIn} />
          <Cell side="right" layer={layerOut} />
        </div>
      )
    })}
    {/* <div className="existence" /> */}
    {/* <div className="time"> */}
    {/* <div className="arrowhead" /> */}
    {/* <div className="label">time</div> */}
    {/* </div> */}
    {/* <div className="physicality">
      <div className="label">line of physicality</div>
    </div> */}
  </div>
)

const Cell: FC<{
  layer: Layer
  side?: 'left' | 'right'
}> = ({ layer, side = '' }) => (
  <div className={`cell ${classerize(layer.name)} ${side}`}>
    <div className="membrane">
      <div className="media">
        <img src={layer.src} alt={layer.name} />
      </div>
    </div>
    <div className="label">{layer.name}</div>
  </div>
)

const classerize = (text: string) => text.toLowerCase().replace(' ', '-')

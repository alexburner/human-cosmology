import { FC } from 'react'
import { beginning, emergeOutOf, emergeWithin, Layer } from './data/layers'

export const App: FC = () => (
  <div className="container">
    <div className="beginning">
      <Cell layer={beginning} />
    </div>
    <div className="rows">
      <div className="row">
        {emergeWithin.map((layer) => (
          <div key={layer.name} className={`cell ${classerize(layer.name)}`}>
            <div className="membrane">
              <div className="label">{layer.name}</div>
              <div className="media">
                <img src={layer.src} alt={layer.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {emergeOutOf.map((layer) => (
          <div key={layer.name} className={`cell ${classerize(layer.name)}`}>
            <div className="membrane">
              <div className="media">
                <img src={layer.src} alt={layer.name} />
              </div>
            </div>
            <div className="label">{layer.name}</div>
          </div>
        ))}
      </div>
    </div>
    {/* <div className="existence" />
    <div className="time">
      <div className="arrowhead" />
      <div className="label">time</div>
    </div>
    <div className="physicality">
      <div className="label">you are here</div>
    </div> */}
  </div>
)

const Cell: FC<{
  layer: Layer
  // side?: 'left' | 'right'
}> = ({ layer }) => (
  <div className={`cell ${classerize(layer.name)}`}>
    <div className="membrane">
      <div className="media">
        <img src={layer.src} alt={layer.name} />
      </div>
    </div>
    <div className="label">{layer.name}</div>
  </div>
)

const classerize = (text: string) => text.toLowerCase().replace(' ', '-')

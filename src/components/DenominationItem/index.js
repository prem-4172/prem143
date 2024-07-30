import './index.css'

const DenominationItem = props => {
  const {denominationsList} = props
  const {value} = denominationsList

  return (
    <div className="value-container">
      <div className="value-1">
        <button className="button-1" type="button">
          {value}
        </button>
        <button className="button-1" type="button">
          {value}
        </button>
      </div>
      <div className="value-1">
        <button className="button-1" type="button">
          {value}
        </button>
        <button className="button-1" type="button">
          {value}
        </button>
      </div>
    </div>
  )
}
export default DenominationItem

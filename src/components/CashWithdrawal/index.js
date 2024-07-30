// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>hello</h1>
        <div className="sub-container">
          <div className="s-para-container">
            <p className="s-para">s</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div>
            <p>Your Balance</p>
            <p>2000</p>
          </div>
          <div>
            <p>Withdraw</p>
            <p>Choose Sun (in Rupees)</p>
            <DenominationItem />
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

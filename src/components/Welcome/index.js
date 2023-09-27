import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
    return (
      <div className="c1">
        <h1 className="h1">Welcome</h1>
        <p className="p1">Thank you! Happy Learning</p>
        <button type="button" onClick={this.changeText} className="b1">
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome

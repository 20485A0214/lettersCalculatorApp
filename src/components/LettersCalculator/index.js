import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label className="paragraph" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="search"
              placeholder="Enter the phrase"
              className="input-container"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <p className="paragraph2">No.of letters:{searchInput.length} </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator

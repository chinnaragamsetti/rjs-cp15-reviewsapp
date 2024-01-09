// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onChangereviewleft = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onChangereviewright = reviewslistlength => {
    const {count} = this.state
    if (count < reviewslistlength - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const reviewslistlength = reviewsList.length
    // const {username, imageUrl, companyName, description} = reviewsList

    return (
      <div className="maincontainer">
        <h1 className="heading">Reviews</h1>

        <div className="couroselcontainer">
          <button
            type="button"
            className="button"
            onClick={this.onChangereviewleft(reviewslistlength)}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="iconimage"
            />
          </button>

          <div className="imagecontainer">
            <img
              src={reviewsList[count].imageUrl}
              alt="username"
              className="image"
            />
            <p className="name">{reviewsList[count].username}</p>
            <p className="company">{reviewsList[count].companyName}</p>
            <p className="description">{reviewsList[count].description}</p>
          </div>
          <button
            type="button"
            onClick={this.onChangereviewright(reviewslistlength)}
            className="button"
            data-testid="right Arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="iconimage"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

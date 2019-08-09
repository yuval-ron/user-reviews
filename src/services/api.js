const REVIEWS_STORAGE_KEY = 'reviews'

export const fetchReviews = () => {
  return new Promise((resolve, reject) => {
    // Faking real request delay
    setTimeout(() => {
      return resolve(getAllReviews())
    }, 500)
  })
}

export const addNewReview = (review) => {
  return new Promise((resolve, reject) => {
    let reviewId = (new Date).toISOString()

    if (!review.id) {
      review = {...review, id: reviewId}
    } else {
      reviewId = review.id
    }

    const allReviews = getAllReviews()

    allReviews[reviewId] = review

    setAllReviews(allReviews)

    // Faking real request delay
    setTimeout(() => {
      return resolve(allReviews)
    }, 500)
  })
}

export const deleteReview = (reviewId) => {
  return new Promise((resolve, reject) => {
    const allReviews = getAllReviews()

    Reflect.deleteProperty(allReviews, reviewId)

    setAllReviews(allReviews)

    // Faking real request delay
    setTimeout(() => {
      return resolve(allReviews)
    }, 500)
  })
}

const getAllReviews = () => {
  const allReviews = localStorage.getItem(REVIEWS_STORAGE_KEY) || '{}'

  return JSON.parse(allReviews)
}

const setAllReviews = (allReviews) => {
  const allReviewsAsString = JSON.stringify(allReviews)

  return localStorage.setItem(REVIEWS_STORAGE_KEY, allReviewsAsString)
}

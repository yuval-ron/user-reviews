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
    const reviewId = (new Date).toISOString()
    review = {...review, id: reviewId}
    const allReviews = getAllReviews()

    allReviews[reviewId] = review

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

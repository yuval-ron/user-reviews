const REVIEWS_STORAGE_KEY = 'reviews'

export const addNewReview = (review) => {
  return new Promise((resolve, reject) => {
    const reviewId = (new Date).toISOString()
    review = {...review, id: reviewId}
    const allReviews = getAllReviews()

    allReviews[reviewId] = review

    setAllReviews(allReviews)
    return resolve(allReviews)
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

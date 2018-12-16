
import { LOAD_REVIEWS_SUCCESS, ADD_NEW_REVIEW_SUCCESS } from '../constants'

export function loadReviews(productId, size) {

    //
    let reviews = [
        { stars: 5, author: 'who@mail.com', body: 'sample-review-1' },
        { stars: 2, author: 'who@mail.com', body: 'sample-review-2' }
    ]

    return { type: LOAD_REVIEWS_SUCCESS, productId, reviews }

}


export function addNewReview(productId, review) {

    //

    return { type: ADD_NEW_REVIEW_SUCCESS, productId, review }

}
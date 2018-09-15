const Review = require('../models/review')

exports.getAllReviews = (request, response) => {
    var query = Review.find()
    console.log(request.query)
    query.exec((error, reviews) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(reviews)
    })
}

exports.postNewReviews = (request, response) => {
    console.log(request.body)
    let review = new Review({
        slug: request.body.slug,
        comment: request.body.comment,
        rating: request.body.rating,
        photo: request.body.photo,
        title: request.body.title,
        location: request.body.location,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt
    })
    review.save().then((review) => {
        console.log('Review Added Successfully')
        response.json(review)
    })
}

exports.updateReviewsById = (request, response) => {
    const {

        slug,
        comment,
        rating,
        photo,
        title,
        location,
        createdAt,
        updatedAt

    } = request.body

    Review.updateOne({
            _id: request.params.id,
        }, {
            slug,
            comment,
            rating,
            photo,
            title,
            location,
            createdAt,
            updatedAt
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Review)
        })
}

exports.delReviewsById = (request, response) => {
    Review.findOneAndDelete({
        _id: request.params.id
    }, (error, deleteId) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully"
        })
    })

}
const Space = require('../models/space')

exports.getAllSpaces = (request, response) => {
    var limit = parseInt(request.query.limit) || 10

    var query = Space.find().limit(limit);
    console.log(request.query)
    if (request.query.name) {
        query.where({
            name: request.query.name
        })
    }
    if (request.query.city) {
        query.where('address.city').equals(request.query.city)
    }

    query.exec((error, space) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(space)
    })
}


exports.postNewSpaces = (request, response) => {
    console.log(request.body);
    let space = new Space({
        name: request.body.name,
        slug: request.body.slug,
        ameneties: request.body.ameneties,
        size: request.body.size,
        address: request.body.address,
        description: request.body.description,
        timing: request.body.timing,
        social: request.body.social,
        createdBy: request.body.createdBy,
        review: request.body.review
    })
    space.save().then((space) => {
        console.log('Space Added Successfully')
        response.json(space)
    })
}

exports.updateSpacesById = (request, response) => {
    const {
        name,
        slug,
        ameneties,
        size,
        address,
        description,
        timing,
        social,
        createdBy,
        review
    } = request.body
    Space.updateOne({
            _id: request.params.id
        }, {
            name,
            slug,
            ameneties,
            size,
            address,
            description,
            timing,
            social,
            createdBy,
            review
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(space)
        })
}

exports.delSpacesById = (request, response) => {
    Space.findOneAndDelete({
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
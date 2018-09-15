const Blogs = require('../models/blog')

exports.getAllBlogs = (request, response) => {
    var query = Blogs.find()
    console.log(request.query)
    query.exec((error, blogs) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(blogs)
    })
}

exports.postNewBlogs = (request, response) => {
    console.log(request.body)
    let blog = new Blogs({
        title: request.body.title,
        photos: request.body.photos,
        author: request.body.author,
        description: request.body.description,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt,
        type: request.body.type
    })
    blog.save().then((blog) => {
        console.log('Blog Added Successfully')
        response.json(blog)
    })
}

exports.updateBlogsById = (request, response) => {
    const {


        title,
        photos,
        author,
        description,
        createdAt,
        updatedAt,
        type

    } = request.body

    Blogs.updateOne({
            _id: request.params.id,
        }, {

            title,
            photos,
            author,
            description,
            createdAt,
            updatedAt,
            type
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Blogs)
        })
}

exports.delBlogsById = (request, response) => {
    Blogs.findOneAndDelete({
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
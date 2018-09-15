const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/petShop');
mongoose.connection.on('error',function(){
    console.log('error in mongo connection');
})
mongoose.connection.on('open',function(){
    console.log('connected to mongo');
})

const spaceController = require('./controllers/space');
const userController = require('./controllers/user');
const reviewController = require('./controllers/review');
const blogController = require('./controllers/blog')


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.get('/',function(req,res){
    res.send('Hello World');
});

app.get('/api/v1/spaces', spaceController.getAllSpaces)
app.post('/api/v1/spaces', spaceController.postNewSpaces)
app.put('/api/v1/spaces/:id', spaceController.updateSpacesById)
app.delete('/api/v1/spaces/:id', spaceController.delSpacesById)

app.get('/api/v1/users', userController.getAllUsers)
app.post('/api/v1/users', userController.postNewUsers)
app.put('/api/v1/users/:id', userController.updateUsersById)
app.delete('/api/v1/users/:id', userController.delUsersById)

app.get('/api/v1/reviews', reviewController.getAllReviews)
app.post('/api/v1/reviews', reviewController.postNewReviews)
app.put('/api/v1/reviews/:id', reviewController.updateReviewsById)
app.delete('/api/v1/reviews/:id', reviewController.delReviewsById)


app.get('/api/v1/blogs', blogController.getAllBlogs)
app.post('/api/v1/blogs', blogController.postNewBlogs)
app.put('/api/v1/blogs/:id', blogController.updateBlogsById)
app.delete('/api/v1/blogs/:id', blogController.delBlogsById)


app.set('port',3000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
})
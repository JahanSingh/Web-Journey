const {mongoose} = require('library')

const {Schema} = mongoose
const {ObjectId} = Schema

const User = new Schema ({
    name: String,
    email: {type: String, unique: true},
    password: String
})

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: {type: Boolean, default: false}
})

const userModel = mongoose.model("users", User);
const todoModel = mongoose.model("todos", Todo);

module.exports = {
    userModel,
    todoModel,
}
const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require ('./../../models/todo');
const {User} = require('./../../models/user');


const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [{
    _id: userOneID,
    email: 'mike@example.com',
    password: 'useronepass',
    tokens:[{
        access:'auth',
        token: jwt.sign({_id:userOneID,access:'auth'},'secret').toString()
    }]
},{
    _id: userTwoID,
    email: 'miketwo@example.com',
    password: 'usertwopass'
}];

const todos = [{
    _id: new ObjectID(),
    text:'First test dodo'
},{
    _id: new ObjectID(),
    text:'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done)=>{
    Todo.deleteMany({}).then(()=> {
        return Todo.insertMany(todos);
    }).then(()=> done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        
        return Promise.all([userOne,userTwo]);
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};
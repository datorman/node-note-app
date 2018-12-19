const expect  = require('expect');
const request  = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text:'First test dodo'
},{
    _id: new ObjectID(),
    text:'Second test todo'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=> {
        return Todo.insertMany(todos);
    }).then(()=> done());
    
});

describe('POST - TODOS', () =>{
    it('should create a new todo', (done) =>{
        var text = 'Test Todo Text';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((response)=>{
                expect(response.body.text).toBe(text); 
            })
            .end((error,response)=>{
                if(error){
                    return done(error);
                }
                Todo.find({text}).then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((error)=>{
                    done(error);
                })
            });
    });
    it('Should not create a new todo bad data', (done) =>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((error,response)=>{
                if(error){
                    return done(error);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((error) => {
                    done(error)
                })  
            });
    })
});

describe('GET todos', () =>{
    it('Should get all todos', (done) =>{
        request(app)
            .get('/todos')
            .expect(200)
            .expect((response)=>{
                expect(response.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('Should return todo doc by id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((response)=>{
                expect(response.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });
    it('Should return a 404 if todo not found', (done) => {
        var id = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done);
    })
    it('should reuturn 404 for non object ids', (done) => {
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done);
    })
});
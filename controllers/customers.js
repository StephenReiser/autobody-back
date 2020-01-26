const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers')



//////////INDEX
customers.get('/', (request, response) => {
    Customer.find({}, (error, foundCustomers) => {
        if(error) {
            response.status(400).json({error: error.message})
        }
        response.status(200).json(foundCustomers)
    })
    // response.status(200).json('backend is up')
})

/////////Delete
customers.delete('/:id', (request, response) => {
    Customer.findByIdAndRemove(request.params.id, (error, deletedCustomer) => {
        if (error) {
            response.status(400).json({error: error.message})
        }
        response.status(200).json(deletedCustomer)
    })
})

///////Update Route

customers.put('/:id', (request, response) => {
    Customer.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, updatedCustomer) => {
        if(error) {
            response.status(400).json({error: error.message})
        }
        response.status(200).json(updatedCustomer)
    })

})


/////////Create
customers.post('/', (request, response) => {
    Customer.create(request.body, (error, createdCustomer) => {
        if(error) {
            response.status(400).json({error: error.message})
        }
        response.status(200).send(createdCustomer)
    })
})


module.exports = customers
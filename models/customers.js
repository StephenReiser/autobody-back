const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    vehicleType: {type: String, required: true},
    vehicleColor: {type: String, required: true},
    vehicleYear: {type: Number, required: true},
    licensePlate: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    timeOfArrival: {type: String, required: true},
    mechanic: {type: String, required: true},
    status: {type: Boolean, default: false}
})

module.exports = mongoose.model('Customer', customerSchema)
const mongoose  = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

//collector Schema
const wasteRequests = new Schema({

    userId:{
        type : ObjectId,
        required:true
    },

    wasteTypes:{
        type:[String],
        required:true
    },

    image:{
        type:Buffer,
        required:true
    },

    location:
    {
        type:{
            type: String,
            required:true
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
            validate: {
                validator: function (value) {
                    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number';
                },
                message: 'Coordinates must be an array of two numbers [longitude, latitude].'
            },
            required:true
        }   
    }
})


wasteRequests.index({ location: '2dsphere' });
const WasteRequest = mongoose.model('wasterequests', wasteRequests);
module.exports = WasteRequest;

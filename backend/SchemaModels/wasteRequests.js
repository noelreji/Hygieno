const mongoose  = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

//collector Schema
const wasteRequests = new Schema({

    userId:{
        type:ObjectId,
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
            type:String,
            required:true
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: function (value) {
                    return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number';
                },
                message: 'Coordinates must be an array of two numbers [longitude, latitude].'
            }
        },
        required:true
    }
})


wasteRequestSchema.index({ location: '2dsphere' });
const WasteRequest = mongoose.model('wasterequests', wasteRequestSchema);
module.exports = WasteRequest;

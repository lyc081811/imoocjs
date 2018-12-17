const mongoose = require('mongoose');
const schame = mongoose.Schema;
const ObjectId = schame.Types.ObjectId
const categorySchema = new schame({
    name: {
        unique: true,
        type: String
    },
    movies: [{
        type: ObjectId,
        ref: 'Movie'
    }],
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})
categorySchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }
    next()
})

mongoose.model('Category', categorySchema)

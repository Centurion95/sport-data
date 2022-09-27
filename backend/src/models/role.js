const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    archived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
        // default: Date.now
        default: null
    }
}, {
    timestamps: true
})

// thisSchema.pre('save', async function (next) {
//     const document = this
//     console.log('Document saved:', document)
//     next()
// })

const Role = mongoose.model('Role', thisSchema)

module.exports = Role
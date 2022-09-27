const mongoose = require('mongoose')
const thisSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        default: null
    },
    gender: {
        type: String, //M, F (male, female)
        required: true,
    },
    id_identifier_type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IdentifierType'
    },
    document_number: {
        type: String,
        required: true,
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

const User = mongoose.model('User', thisSchema)

module.exports = User
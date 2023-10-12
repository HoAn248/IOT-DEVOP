var mongoose = require('mongoose')

const DiemDanh = new mongoose.Schema(
    {
        status: {
            type: Boolean
        },
        lop: {
            type: String,
            required: true
        },
        giaovien: {
            type: String,
            required: true
        }
    },
)

module.exports = mongoose.model('diemdanh', DiemDanh)

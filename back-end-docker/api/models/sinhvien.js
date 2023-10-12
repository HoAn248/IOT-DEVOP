var mongoose = require('mongoose')

const SinhVien = new mongoose.Schema(
  {
    ten: {
      type: String,
      required: true
    },
    idsv:{
      type: String,
      required: true
    },
    tuoi:{
      type: Number,
      required: true
    },
    ngaysinh:{
      type: String,
      required: true
    },
    lop:{
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
    diemdanh:{
      type: String,
      default: "null"
    }
  },
)

module.exports = mongoose.model('sinhvien', SinhVien)

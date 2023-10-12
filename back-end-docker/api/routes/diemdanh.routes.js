var express = require('express')
var router = express.Router()
var DiemDanhController = require('../controllers/diemdanh.controller')
router.post('/', DiemDanhController.createDiemDanh)
router.get('/:id', DiemDanhController.getDiemDanh)
router.get('/', DiemDanhController.getAllDiemDanh)
module.exports = router

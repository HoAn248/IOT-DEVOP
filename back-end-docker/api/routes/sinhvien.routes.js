var express = require('express')
var router = express.Router()
var SinhVienController = require('../controllers/sinhvien.controller')

router.get('/all', SinhVienController.getAllSinhVien)
router.get('/:id', SinhVienController.getSinhVien)
router.post('/', SinhVienController.createSinhVien)
router.post('/update/:id', SinhVienController.updateSinhVien)
router.post('/delete/:id', SinhVienController.deleteSinhVien)
router.post('/clear/:id', SinhVienController.updateDiemDanh)

module.exports = router
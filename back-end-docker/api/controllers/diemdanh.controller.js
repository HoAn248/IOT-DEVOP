var DiemDanh = require('../models/diemdanh')
var SinhVien = require('../models/sinhvien')
exports.createDiemDanh = ((req, res) => {
    var lop = req.body.lop;

    DiemDanh.create(req.body)
        .then((data) => {
            SinhVien.updateMany({ lop: lop }, { diemdanh: data._id })
                .then(() => {
                    res.sendStatus(200);
                })
                .catch((error) => {
                    res.sendStatus(403);
                });
        })
        .catch((error) => {
            res.sendStatus(403);
        });

})
exports.getDiemDanh = ((req, res) => {
    let id = req.params.id;
    DiemDanh.findOne({ _id: id })
        .then(data => {
            res.send(data);
        })
        .catch(() => {
            res.sendStatus(403)
        })
})

exports.getAllDiemDanh = ((req, res) => {
    DiemDanh.find({})
        .then(data => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        })
})
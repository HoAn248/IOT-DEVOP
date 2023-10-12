var SinhVien = require('../models/sinhvien')
exports.getAllSinhVien = ((req, res) => {
    SinhVien.find({})
        .then(data => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        })
})

exports.getSinhVien = ((req, res) => {
    let id = req.params.id;
    SinhVien.findOne({ idsv: id })
        .then(data => {
            res.send(data);
        })
        .catch(() => {
            res.sendStatus(403)
        })
})

exports.createSinhVien = ((req, res) => {
    const data = req.body
    SinhVien.create(data)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(() => {
            res.sendStatus(403)
        })
})

exports.updateSinhVien = ((req, res) => {
    let id = req.params.id;
    let data = req.body;
    
    // SinhVien.updateOne({ idsv: id }, data)
    // .then(()=>{
    //     res.sendStatus(200)
    // })
    // .catch(() => {
    //     res.sendStatus(403)
    // })
    SinhVien.updateOne({ idsv: id }, data)
        .then(e => {
            if (e.matchedCount === 0) {
                res.sendStatus(403); 
            } else {
                res.sendStatus(200); 
            }
        })
        .catch((error) => {
            res.sendStatus(500); 
        });
})

exports.updateDiemDanh = ((req, res) => {
    let id = req.params.id;
    
    SinhVien.updateOne({ idsv: id }, {diemdanh: "null"})
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(() => {
        res.sendStatus(403)
    })
})

exports.deleteSinhVien = ((req,res)=>{
    let id = req.params.id;
    SinhVien.deleteOne({idsv: id})
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(()=>{
        res.sendStatus(403)
    })
})
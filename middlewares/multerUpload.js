const multer = require('multer')


const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '')
    }
})

exports.multerUpload = multer({ storage }).single('image')

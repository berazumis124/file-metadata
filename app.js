var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/'},{
    filename: function (req, file, callback){
                        callback(null, file.originalname)
                    }});
var PORT = process.env.PORT || 4998;



app.use(express.static("public"));

app.post('/fileCheck', upload.single('fileupload'), function(req, res){
    //console.log(req.file);
    var filesize = {};
    filesize.size = req.file.size;
    res.status(200).json(filesize);
});

app.listen(PORT);
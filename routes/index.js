const express = require('express'),
    router = express.Router(),
    formidable = require('formidable');

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Upload your files'
    })
})
router.post('/uploads', (req, res) => {
    req.fields; // contains non-file fields
    req.body
    req.files; // contains files
    var form = new formidable.IncomingForm()
    form.parse(req);
    form.on('fileBegin', (name, file) => {
        file.path = './public/uploads/' + file.name;
        console.log(file.name)
    })

    console.log(req.files)
    res.render('done', {
        title: 'file uploaded successfully'
    })

});


module.exports = router
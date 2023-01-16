var express = require('express');
var cors = require('cors');
var formidable = require('formidable')
//require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', (req, res, next) => {
  const form = formidable({ });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //res.json({ fields, files });
    res.json({name: files.upfile.originalFilename, type: files.upfile.mimetype, size: files.upfile.size})
  });
});

app.listen(10000);

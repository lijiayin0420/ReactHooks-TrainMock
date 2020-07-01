const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(80);





// const express = require('express')

// const app = express()

// app.get('/', (request, response) => {
//   response.status(200)
//   response.send('hello express')
//   response.end()
// })
// app.get('/rest', (request, response) => {
//   response.json({
//     result: 1,
//     msg: 'hello express',
//   })
// })

// app.listen(3300) // 参数为端口号

const express = require('express')
const app = express()

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행 중')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/news', (request, response) => {
    response.send('오늘 날씨 맑음')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/about.html')
})
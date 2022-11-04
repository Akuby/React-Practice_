const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('root!')
})

app.get('/movie', (req, res) => {
  console.log('movie 요청');

  db.query('select * from movie', (err, data) => {
    if(!err) {
      // console.log(data);
      res.send(data)
      // response, send 응답을 프론트 쪽으로 보낸다.
    } else {
      console.log(err);
    }
  })
})

app.get('/movie/:id', (req, res) => {
  console.log('movie/:id 요청');
  const id = req.params.id;
  console.log(id);
  db.query(`select * from movie where id=${id}`, (err, data) => {
    if(!err) {
      res.send(data)
    } else {
      console.log(err);
    }
  })
})

app.post('/movie', (req, res) => {
  console.log('movie 추가 요청');
  // url query에 담긴게 아니기 때문에 req.params에서 찾는게 아니고 
  // req.body에 들어있다. 근데 지금은 undefined 나올걸... body parser 없어서...
  // body-parser를 깔고 최상단에 app.use(bodyParser.json())로 json화 시켜줬다.
  const id = req.body.id;
  const title = req.body.title;
  const director = req.body.director;
  const running_time = req.body.running_time;
  console.log(`id: ${id} | title: ${title} | director: ${director} | running_time: ${running_time}`);

  db.query(`insert into movie values(${id}, '${title}', '${director}', '${running_time}')`, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})

app.put('/movie', (req, res) => {
  console.log('movie 수정 요청');
  const id = req.body.id;
  const title = req.body.title;

  db.query(`update movie set title='${title}' where id=${id}`, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})

app.delete('/movie/:id', (req, res) => {
  console.log('movie 삭제 요청');
  const id = req.params.id;
  console.log(id);
  db.query(`delete from movie where id=${id}`, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버가 열렸습니다!`);
})
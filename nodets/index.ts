import http from 'http';
import app from './src/app';

var port = 3000;
var server = http.createServer(app);

app.listen(port, () => {
    console.log("Power Server rodando");
});
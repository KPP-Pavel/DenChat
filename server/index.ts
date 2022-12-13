import express from 'express';
import path from 'path';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

export class Server {
    app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares = () => {
        this.app.use(connectLiveReload());
        this.app.use(express.json());
    };

    routes = () => {
        this.app.get('/', (req, res) => {           
            res.sendFile(path.join(__dirname, '..', 'src', 'index.html'));
            // res.send('Hello World!');
        });
    };

    listen = () => {
        this.app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    };
}

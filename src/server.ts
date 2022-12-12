import express from 'express';
import path from 'path';

const port = 3000;

export class Server {
    app;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares = () => {
        this.app.use(express.json());
    };

    routes = () => {
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '/index.html'));
            // res.send('Hello World!');
        });
    };

    listen = () => {
        this.app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    };
}

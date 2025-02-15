import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.config();
const PING_LISTEN_PORT = process.env.PING_LISTEN_PORT || 2222;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PING_LISTEN_PORT);
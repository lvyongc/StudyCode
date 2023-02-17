import KaiKeBa from './libs/KaiKeBa';
import path from 'path';


let server = new KaiKeBa({
    controllersDir: path.resolve(__dirname, './controllers/**/*')
});

server.start();
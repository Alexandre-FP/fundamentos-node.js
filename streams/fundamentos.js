// Netflix Spotify

// streams ->
// process.stdin.pipe(process.stdout); // stdin -> lendo / stout -> escrevendo

// Duplex é tanto leitura e escrita

import { Readable, Writable, Transform } from "node:stream";

class OneToStream extends Readable { // stream -> leitura
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
  
        this.push(buf);
      }
    }, 1000)
  }
}

class IverseNumber extends Transform { // stream -> tranfomação
  _transform(chunck, enconding, callback){
    const tranform = Number(chunck.toString()) * -1

    callback(null, Buffer.from(String(tranform)))
  }
}

class TwoToStream extends Writable { // stream -> escrita
  
  _write(chunck, enconding, callback){
    Number(chunck.toString()) * 10
    callback()
  }
}

new OneToStream()
  .pipe(new IverseNumber())
  .pipe(new TwoToStream())

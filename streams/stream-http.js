import http from "node:http"
import { Transform } from "node:stream";

class IverseNumber extends Transform { // stream -> tranfomação
  _transform(chunck, enconding, callback){
    const tranform = Number(chunck.toString()) * -1

    console.log(tranform)

    callback(null, Buffer.from(String(tranform)))
  }
}

const server = http.createServer(async (req, res) => { 
  const buffers = []

  for await (const chunck of req){
    buffers.push(chunck)
  }

  const fullBody = Buffer.concat(buffers).toString()
  console.log(fullBody)

  return res.end(fullBody) 
})

server.listen(3000)
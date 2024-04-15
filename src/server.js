import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './middlewares/routes.js';
import { paramsQuery } from './utils/query-params.js';

const server = http.createServer(async (req, res) => {
  const { method, url } = req
  
  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(!route){
    return res.writeHead(404).end(JSON.stringify({ message: 'Essa rota não existe!' }))
  }

  if(route){
    const routeParams = req.url.match(route.path)


    const { query, ...params } = routeParams.groups
 
    req.params = params
    req.query = query ? paramsQuery(query) : {}  
 
    return route.handler(req, res) 
  }

});

server.listen(3333);

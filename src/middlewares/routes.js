import { DataBase } from "./database.js";
import { randomUUID } from 'node:crypto';
import { pathRegex } from '../utils/build-route-path.js'

const database = new DataBase()

export const routes = [
  {
    method: "GET",
    path: pathRegex('/users'),
    handler: (req, res) => {
      const { query } = req

      const users = database.select('usuarios', query.search ? {
        nome: query.search,
        email: query.search,
      } : null)

      return res.end(JSON.stringify(users));
    }
  },

  {
    method: "POST",
    path: pathRegex('/users'),
    handler: (req, res) => {
      const { nome, email } = req.body
      
      const user = ({
        id: randomUUID(),
        nome,
        email,  
      })
      
      database.insert('usuarios', user)
      
      return res.writeHead(201).end(JSON.stringify(user));
    }
  },

  {
    method: "DELETE",
    path: pathRegex('/user/:id'), 
    handler: (req, res) => {
      const { params } = req

      database.delete('usuarios', params.id)

      return res.writeHead(204).end();
    }
  },

  {
    method: "PUT",
    path: pathRegex('/user/:id'), 
    handler: (req, res) => {
      const { params, body } = req

      const user = database.atualizar('usuarios', params.id, {
        ...body
      })

      return res.writeHead(204).end(JSON.stringify(user)); 
    }
  },
]
sempre que algum serviço for interno do node coloca node:novo
commomjs => require 
ESmodules => import/export

- HTTP
  - Método HTTP
  - URL

- Methods HTTP
  - GET => buscar recursos
  - POST => criar uma informação 
  - PUT => atualizar um recurso
  - PATCH => atualiza uma informação específica de um recurso 
  - DELETE => deletar um recurso

- Cabeçalhos (Requisição/resposta) => Metadados

- Statefull => quando trabalhamos de forma manual como guardar infomação em memoria
- Stateless => quando guardamos nossos dados em um banco de dados

- HTTP Status Code => https://developer.mozilla.org/en-US/docs/Web/HTTP/Status 
 - 

- Middlewares
 - Recptador

- Formas que uma aplicação que esteja consumido meu backend enviar informação
  - Query Paramters: Quando eu preciso ter uma URL Stateful => filtros, paginação || http://localhost:333/users?userId=1&name=Alexandre
  - Route Paramaters: Indentificação de recurso || GET http://localhost:333/users/1 DELETE http://localhost:333/users/1
    - Tanto query e route paramaters são enviados na rota, mais não podemos enviar dados sensiveis como senha 
  - Requst Body: Envio de informção de um formulário (HTTPs) || POST http://localhost:333/users
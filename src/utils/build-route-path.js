// Regex é uma expressão regular

// /user/:id
export function pathRegex(path){
  const routeParamaters = /:([a-zA-Z]+)/g
  const pathParams = path.replaceAll(routeParamaters, '(?<$1>[a-z0-9\-_]+)')

  // return new RegExp()
  const pathRegex = new RegExp(`^${pathParams}(?<query>\\?(.*))?$`)

  return pathRegex; 
}
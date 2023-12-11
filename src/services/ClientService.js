import fetch from 'auth/FetchInterceptor'


const clientService = {}

clientService.getUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params
  })
}


clientService.getUser = function (params) {
    const id = params;
    
    return fetch({
      url: `/users/${id}`,
      method: 'get',
      params
    })
  }

  
export default clientService
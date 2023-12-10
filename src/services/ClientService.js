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

  
// clientService.setPost = function (data) {
//   return fetch({
//     url: '/posts',
//     method: 'post',
//     data: data
//   })
// }

export default clientService
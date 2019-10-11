import axios from 'axios'
const headers = {
    'Content-Type': 'application/json'
}
const URL = process.env.NODE_ENV == 'production' ? '' : "http://localhost:3000/api"

var token;
// var _this = this;

function setPage(path,page,body) {
  return new Promise((resolve,reject)=>{
  let queryString = ''
  let query = {path,page}
  Object.keys(query).map((param , i) => queryString += (i == 0 ? "?" : "&") + `${param}=${query[param]}` )
  console.log(queryString)
  console.log(body)
  fetch(URL+'/website'+queryString,{
    method : 'put',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include',
  })
    .then(res => {
      if (res.status === 200) {
        resolve(res.text())
      } else {
        reject()
      }
    })
    .catch(err => {
      reject()
    });
  })
}

function getPage(path,page) {
  return new Promise((resolve,reject)=>{
    let queryString = ''
    let query = {path,page}
    Object.keys(query).map((param , i) => queryString += (i == 0 ? "?" : "&") + `${param}=${query[param]}` )

    fetch(URL+'/website'+ queryString,{
      method : 'get',
      credentials: 'include',
    })
      .then(async res => {
        if (res.status === 200) {
          resolve(res.text())
        } else {
          reject()
        }
      })
      .catch(err => {
        reject()
      });
  })

}


function getMatching(text,collection) {
  return new Promise((resolve,reject)=>{
    request('GET','/'+collection,{text})
    .then((results) => resolve(results))
    .catch((e)=>reject(e))
  })

}

function login(email='geoffroymounier@gmail.com',password='France98') {
  return new Promise((resolve,reject) => {
    request('POST','/login',{email,password},{email,password})
    .then(() => resolve())
    .catch((e)=>reject(e))
  })
}

function isAuth() {
    return (localStorage.getItem('token') !== null);
}

function request(method = 'GET',path,query = {},body){
    return new Promise((resolve,reject) => {
      let queryString = ''
      Object.keys(query).map((param , i) => queryString += (i == 0 ? "?" : "&") + `${param}=${query[param]}` )
      fetch(URL+path+queryString,{
        method,
        body : body ? JSON.stringify(body) || "" : null,
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
        credentials: 'include',

      }).then((res)=>{
        switch (res.status){
          case 200 :
            return res.json()
          break;
          default :
            reject('Error somehow')
            break;
        }
      }).then((json)=>{
        console.log(json)
        resolve(json)
      }).catch((e)=>reject(e))
    })
  }

export {getPage,setPage,login,request,isAuth,getMatching}

function encodeParams(payload = {}){

  return Array.isArray(Object.keys(payload)) ? "?" + Object.keys(payload)
           .map(k => encodeURIComponent(k) + '=' + encodeURIComponent((payload||{})[k]))
           .join('&') : ''
}
function decodeParams(payload = ''){
  return ((payload.split('?') || [])[1]||'').split('&').reduce((arr, item) => 
      item.split('=').length == 2 ? {...arr,[item.split('=')[0]] : item.split('=')[1] } : arr
  ,{})
}
export {encodeParams,decodeParams}

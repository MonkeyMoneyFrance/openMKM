
function encodeParams(payload = {}){

  return Array.isArray(Object.keys(payload)) ? "?" + Object.keys(payload)
           .map(k => encodeURIComponent(k) + '=' + encodeURIComponent((payload||{})[k]))
           .join('&') : ''
}

export {encodeParams}

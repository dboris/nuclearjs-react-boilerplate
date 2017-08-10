export function dispatch (action) {
  return (reactor) => { reactor.dispatch(action) }
}

export function dispatchPayload (action) {
  return (reactor, payload) => { reactor.dispatch(action, payload) }
}

export function inc (n) {
  return n + 1
}

export function dec (n) {
  return n - 1
}

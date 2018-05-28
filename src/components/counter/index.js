import { h } from "hyperapp";

const view = (state, actions) => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
    </div>
  )
}

export default _ => ({
  state: {
    count: 0
  },
  actions: {
    down: _ => state => ({ count: state.count -= 1 }),
    up: _ => state => ({ count: state.count += 1 })
  },
  view: (state, actions) => {
    return view(state, actions);
  }
})
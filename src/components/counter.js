import { h } from "hyperapp";

export default _ => ({
  state: {
    count: 0
  },
  actions: {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value })
  },
  view: (state, actions) => {
    return (
      <main>
        <h1>{state.count}</h1>
        <button onclick={() => actions.down(1)}>-</button>
        <button onclick={() => actions.up(1)}>+</button>
      </main>
    )
  }
})
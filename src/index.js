import { h, app } from "hyperapp"
import Counter from "./components/counter";

const modules = {
  Counter: Counter()
}
const Root = {
  state: {
    counter: modules.Counter.state
  },
  actions: {
    counter: modules.Counter.actions
  },
  view: (state, actions) => {
    const views = {
      counter: modules.Counter.view(state.counter, actions.counter)
    }
    return views.counter;
  }
}

app(Root.state, Root.actions, Root.view, document.body);
/* dependencies */
import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";

/* components */
import Counter from "./components/counter";
import Todo from "./components/todo";

const modules = {
  Counter: Counter(),
  Todo: Todo()
};
const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>

const Root = {
  state: {
    counter: modules.Counter.state,
    location: location.state
  },
  actions: {
    counter: modules.Counter.actions,
    location: location.actions
  },
  view: (state, actions) => {
    const views = {
      counter: modules.Counter.view(state.counter, actions.counter),
      todo: modules.Todo.view()
    }
    return (
      <main>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/todos">Todo</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" render={() => views.counter} />
        <Route path="/todos" render={() => views.todo} />
      </main>
    );
  }
}

const main = app(Root.state, Root.actions, Root.view, document.body);
const unsubscribe = location.subscribe(main.location)
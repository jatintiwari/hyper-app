/* dependencies */
import { h, app } from "hyperapp";
import { Route, location } from "@hyperapp/router";

/* components */
import Counter from "./components/counter";
import Todo from "./components/todo";
import Header from "./components/header";

/* style */
import style from "./index.css";

const modules = {
  Counter: Counter(),
  Todo: Todo(),
  Header: Header()
};

const Root = {
  state: {
    counter: modules.Counter.state,
    todo: modules.Todo.state,
    location: location.state,
    header: modules.Header.state
  },
  actions: {
    counter: modules.Counter.actions,
    todo: modules.Todo.actions,
    location: location.actions,
    header: modules.Header.actions
  },
  view: (state, actions) => {
    const views = {
      counter: modules.Counter.view(state.counter, actions.counter),
      todo: modules.Todo.view(state.todo, actions.todo),
      header: modules.Header.view(state.header, actions.header)
    }
    return (
      <main>
        {views.header}
        <div class="container">
          <Route path="/" render={() => views.counter} />
          <Route path="/todos" render={() => views.todo} />
        </div>
      </main>
    );
  }
}
const appElem = document.getElementById('app');
const main = app(Root.state, Root.actions, Root.view, appElem);
const unsubscribe = location.subscribe(main.location)
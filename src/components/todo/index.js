import { h } from 'hyperapp';

/* style */
import style from './index.css';

/* constants */
const initialState = {
  todos: [],
  count: 0,
  filter: "ALL"
}

export default _ => ({
  state: initialState,
  actions: {
    add: event => state => {
      const text = document.getElementById("todo-text").value;
      const todos = [...state.todos, {
        text,
        complete: false
      }];
      return ({ todos });
    },
    changeFilter: filter => state => ({ filter }),
    clear: _ => state => (initialState),
    toggleComplete: (index) => state => {
      const todos = state.todos.map((todo, i) => {
        if (i === index) return Object.assign({}, todo, { complete: !todo.complete });
        return todo;
      })
      return ({ todos })
    }
  },
  view: (state, actions) => {
    const todos = state.todos.filter(todo => {
        if(state.filter === 'ALL') return true;
        if(state.filter === 'COMPLETED' && todo.complete ) return true;
        if(state.filter === 'PENDING' && !todo.complete) return true;
    });
    return (
      <div ondestroy={actions.clear.bind(actions)}>
        <p>Todos</p>
        <div>
          <div>
            <input type="text" id="todo-text" />
            <button onclick={actions.add.bind(actions)}>Add</button>
          </div>
          <div>
            <button onclick={actions.changeFilter.bind(actions, "ALL")}>All</button>
            <button onclick={actions.changeFilter.bind(actions, "COMPLETED")}>Completed</button>
            <button onclick={actions.changeFilter.bind(actions, "PENDING")}>Pending</button>
          </div>
        </div>
        <ul class="todos">
          {todos.map((todo, i) => {
            return (
              <li
                key={i}
                onclick={actions.toggleComplete.bind(actions, i)}
                class={`todo${todo.complete ? ' completed' : ''}`}>
                {todo.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})
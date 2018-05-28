import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

/* styles */
import style from './index.css';

export default _ => ({
  view: (state, actions) => {
    return (
      <div class="header">
        <ul class="header-links">
          <li class="header-link">
            <Link to="/" class="header-link-text">Counter</Link>
          </li>
          <li class="header-link">
            <Link to="/todos" class="header-link-text">Todo</Link>
          </li>
        </ul>
      </div>
    )
  }
})
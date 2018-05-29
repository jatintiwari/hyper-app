import { h } from "hyperapp";
import { Link, location } from "@hyperapp/router";

/* styles */
import style from './index.css';

export default _ => ({
  state: {
    headerLinks: [{
      text: 'Counter',
      to: '/',
      selected: true
    }, {
      text: 'Todo',
      to: '/todos',
      selected: false
    }]
  },
  actions: {
    selectTab: linkToSelect => (state) => {
      const headerLinks = state.headerLinks.map(link => {
        if (link.to === linkToSelect) return Object.assign({}, link, { selected: true })
        return Object.assign({}, link, { selected: false });
      });
      return ({ headerLinks });
    }
  },
  view: (state, actions) => {
    return (
      <div class="header" oncreate={actions.selectTab.bind(actions, location.state.pathname)}>
        <ul class="header-links">
          {state.headerLinks.map(link => {
            return (
              <Link
                to={link.to}
                class={link.selected ? "header-link selected" : "header-link"}
                onclick={actions.selectTab.bind(actions, link.to)}>
                <li class="header-link-text">
                  {link.text}
                </li>
              </Link>)
          })}
        </ul>
      </div>
    )
  }
})
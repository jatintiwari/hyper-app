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
    selectTab: event => (state) => {
      const linkToSelect = event.currentTarget.dataset.linkText;
      state.headerLinks.forEach(link => {
        if (link.text === linkToSelect) { link.selected = true; }
        else { link.selected = false; }
      });
      return state;
    }
  },
  view: (state, actions) => {
    return (
      <div class="header">
        <ul class="header-links">
          {state.headerLinks.map(link => {
            return (<li class={link.selected ? "header-link selected" : "header-link"} data-link-text={link.text} onclick={(e) => actions.selectTab(e)}>
              <Link to={link.to} class="header-link-text">{link.text}</Link>
            </li>)
          })}
        </ul>
      </div>
    )
  }
})
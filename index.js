import { render } from './FakeReact.js'
import Component from './Component.js';

let propCount = 0;
document.getElementById('btn-prop').addEventListener('click', () => {
  ++propCount;
  renderComponent();
});

function renderComponent() {
  render(
    Component, 
    { propCount, buttonElem: document.getElementById('btn-count') }, 
    document.getElementById('root')
  );
}

renderComponent();
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {


  render() {
    return <div>
      <label for="test">Test</label>
      <input id="test" name='test' type='text' />
      <button>test</button>
    </div>;
  }
}

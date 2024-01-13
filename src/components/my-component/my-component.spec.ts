import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import { getByRole } from '@testing-library/dom';

import '@testing-library/jest-dom';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    const button = getByRole(root, 'button');

    expect(button).toBeInTheDocument();
  });

});

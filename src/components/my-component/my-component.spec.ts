import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
import {  screen } from '@testing-library/dom';

import '@testing-library/jest-dom';

describe('using testing library with stencil', () => {
  it('getByRole should work', async () => {
    await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('getByLabelText should work', async () => {
    await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    const input = screen.getByLabelText('Test');

    expect(input).toBeInTheDocument();
  });

});

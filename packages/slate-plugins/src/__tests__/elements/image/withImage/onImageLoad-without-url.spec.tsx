/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import { onImageLoad } from 'elements';

const input = (
  <editor>
    <p>test</p>
  </editor>
) as any;

const reader = {
  result: '',
};

const output = (
  <editor>
    <p>test</p>
  </editor>
) as any;

it('should be', () => {
  onImageLoad(input, reader as any)();
  expect(input.children).toEqual(output.children);
});
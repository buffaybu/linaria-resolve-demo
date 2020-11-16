import * as React from 'react';
import { styled } from 'linaria/react';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const Foo = styled.div``;

export const Bar = styled.div`
  .${Foo} {
    color: red;
  }
`;

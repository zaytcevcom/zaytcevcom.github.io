import React, { FC, useRef, useState } from 'react';
import type { Meta } from '@storybook/react';
import { Effector, EffectorRef } from './Effector';

const Popover: FC = () => {
  return <div style={{ userSelect: 'none' }}>+1 ❤️</div>;
};

const Like: FC<{ effector: React.MutableRefObject<EffectorRef> }> = ({ effector }) => {
  const [counter, setCounter] = useState(0);

  return (
    <button
      onClick={(e) => {
        setCounter(counter + 1);
        effector.current.add(<Popover />, {
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      {counter} ❤️
    </button>
  );
};

const Wrapper = () => {
  const effector = useRef<EffectorRef>();

  return (
    <>
      <Effector ref={effector} />
      <div style={{ marginTop: 20 }}>
        <div>Post #1</div>
        <Like effector={effector} />
      </div>
      <div style={{ marginTop: 20 }}>
        <div>Post #2</div>
        <Like effector={effector} />
      </div>
      <div style={{ marginTop: 20 }}>
        <div>Post #3</div>
        <Like effector={effector} />
      </div>
    </>
  );
};

const meta: Meta<typeof Effector> = {
  title: 'Effector',
  component: Wrapper,
};

export default meta;

export const EffectorStory = {};

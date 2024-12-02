import React, { forwardRef, useImperativeHandle, useState } from 'react';
import s from './Effector.module.sass';
import { createPortal } from 'react-dom';
import cn from 'clsx';
import { v4 } from 'uuid';

type Coords = {
  x: number;
  y: number;
};

export type EffectorProps = {
  className?: string;
  container?: HTMLElement;
};

export type EffectorRef = {
  add?: (elem: React.ReactNode, coords: Coords) => void;
};

type Element = {
  id: string;
  node: React.ReactNode;
  coords: Coords;
};

export const Effector = forwardRef<EffectorRef, EffectorProps>(({ className, container = document.body }, ref) => {
  const [elements, setElements] = useState<Element[]>([]);

  useImperativeHandle(ref, () => ({
    add: (node, coords) => {
      const element: Element = {
        id: v4(),
        node: node,
        coords: coords,
      };
      setElements((v) => [...v, element]);
    },
  }));

  const onAnimationEnd = (id: string) => (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setElements((v) => v.filter((i) => i.id !== id));
  };

  return createPortal(
    elements.map((item) => (
      <div
        key={item.id}
        className={cn(s.element, className)}
        onAnimationEnd={onAnimationEnd(item.id)}
        style={{ top: item.coords.y, left: item.coords.x }}
      >
        {item.node}
      </div>
    )),
    container
  ) as React.ReactNode;
});

Effector.displayName = 'Effector';

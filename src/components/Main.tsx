import React from 'react';
import { Content } from '../logic/content';
import { MemGrid } from './MemGrid';

interface MainProps {
  content: Content;
}

export const Main = (props: MainProps): JSX.Element => {
  return (
    <main className="main">
      <MemGrid content={props.content} />
    </main>
  );
};

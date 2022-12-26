import React from "react";
import { ComponentProps } from "../page-components";
import { AlbumsComponentQuery } from '../../lib/api/pages';
import Container from '../container';
import Albums from '../albums';

interface Props extends ComponentProps {
  component: AlbumsComponentQuery
}

export default function AlbumsComponent({ component }: Props) {
  return (
    <Container>
      <Albums albums={component.albums} />
    </Container>
  );
}

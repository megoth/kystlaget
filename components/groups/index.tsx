import React from "react";
import Container from '../container';
import Group from './group';
import { GroupQuery } from '../../lib/api/group';

interface Props {
  groups: Array<GroupQuery>
}

export default function Groups({ groups }: Props) {
  return (
    <Container>
      {groups.map((group) => (
        <section key={group._id}>
          <Group group={group} />
        </section>
      ))}
    </Container>
  );
}

import React from 'react';
import { GroupQuery } from '../../lib/api/pages';
import Member from './member';
import { listStyle } from './styles.css';

interface GroupConstellationGroupProps {
  group: GroupQuery
}

export default function Group({ group }: GroupConstellationGroupProps) {
  return (
    <>
      <h2 id={group._id}>{group.name}</h2>
      <ul className={listStyle}>
        {group.members.map((member) => (
          <li key={member._key}>
            <Member member={member} />
          </li>
        ))}
      </ul>
    </>
  )
}

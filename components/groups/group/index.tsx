import React from 'react';
import { listStyle } from '../styles.css';
import { GroupQuery } from '../../../lib/api/group';
import Member from './member';

interface GroupConstellationGroupProps {
  group: GroupQuery
}

export default function Group({ group }: GroupConstellationGroupProps) {
  return (
    <>
      <h2 id={group._id}>{group.name}</h2>
      <ul className={listStyle}>
        {group.members.map((person) => (
          <li key={person._id}>
            <Member person={person} />
          </li>
        ))}
      </ul>
    </>
  )
}

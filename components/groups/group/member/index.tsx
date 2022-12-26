import React from 'react';
import { nameStyle } from './styles.css';

interface MemberProps {
  person: Sanity.Schema.Person;
}

export default function Member({ person }: MemberProps) {
  return (
    <span className={nameStyle}>{person.name}</span>
  )
}

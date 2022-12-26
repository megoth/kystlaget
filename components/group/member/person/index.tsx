import React from "react";
import { imageBuilder } from '../../../../lib/sanity';
import { asSquare } from '../../../../lib/images';
import { imageStyle, nameStyle, personStyle } from './styles.css';

interface GroupMemberPerson {
  person: Sanity.Schema.Person
}

export default function GroupMemberPerson({ person }: GroupMemberPerson) {
  const image = imageBuilder(person.image);
  return (
    <div className={personStyle}>
      <img
        className={imageStyle}
        src={asSquare(image).url()}
        alt={`Bilde av ${person.name}`}
      />
      <div className={nameStyle}>{person.name}</div>
    </div>
  )
}

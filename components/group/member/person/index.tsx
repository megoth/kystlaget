import React from "react";
import { imageBuilder } from '../../../../lib/sanity';
import { asThumbnail } from '../../../../lib/images';

interface GroupMemberPerson {
  person: Sanity.Schema.Person
}

export default function GroupMemberPerson({ person }: GroupMemberPerson) {
  const image = imageBuilder(person.image);
  return (
    <div>
      <img
        src={asThumbnail(image).url()}
        alt={`Bilde av ${person.name}`}
      />
      <div>{person.name}</div>
    </div>
  )
}

import { asFullSize } from '../../../../lib/images';
import React from 'react';
import { imageBuilder } from '../../../../lib/sanity';

interface GroupMemberAssociationProps {
  association: Sanity.Schema.Association
}

export default function GroupMemberAssociation({ association }: GroupMemberAssociationProps) {
  const image = imageBuilder(association.logo);
  return <div>
    <img
      src={asFullSize(image).url()}
      alt={`Logo for ${association.name}`}
    />
    <div>{association.name}</div>
  </div>
}

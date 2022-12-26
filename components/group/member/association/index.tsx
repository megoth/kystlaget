import { asFullSize } from '../../../../lib/images';
import React from 'react';
import { imageBuilder } from '../../../../lib/sanity';
import { imageStyle, nameStyle } from './styles.css';

interface GroupMemberAssociationProps {
  association: Sanity.Schema.Association
}

export default function GroupMemberAssociation({ association }: GroupMemberAssociationProps) {
  const image = imageBuilder(association.logo);
  return <div>
    <img
      className={imageStyle}
      src={asFullSize(image).url()}
      alt={`Logo for ${association.name}`}
    />
    <div className={nameStyle}>{association.name}</div>
  </div>
}

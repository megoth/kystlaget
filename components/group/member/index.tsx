import React from 'react';
import GroupMemberPerson from './person';
import { MemberQuery } from '../../../lib/api/pages';
import GroupMemberAssociation from './association';

interface MemberProps {
  member: MemberQuery;
}

export default function Member({ member }: MemberProps) {
  return (
    <>
      {member.person && <GroupMemberPerson person={member.person} />}
      {member.association && <GroupMemberAssociation association={member.association} />}
    </>
  )
}

import { GroupComponentQuery } from '../../lib/api/pages';
import { ComponentProps } from '../page-components';
import Group from '../group';
import Container from '../container';

interface GroupComponentProps extends ComponentProps {
  component: GroupComponentQuery
}

export default function GroupComponent({ component }: GroupComponentProps) {
  return (
    <Container>
      <Group key={component.group._id} group={component.group} />
    </Container>
  )
}

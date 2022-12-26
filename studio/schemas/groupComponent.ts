import { ComponentTypes } from './page';

export default {
  name: ComponentTypes.GROUP,
  title: "Gruppe",
  type: "object",
  fields: [
    {
      name: "group",
      title: "Gruppe",
      description: "Nødvendig",
      type: "reference",
      to: [{ type: "group" }],
    },
  ],
  preview: {
    select: {
      title: "group->name",
    },
  },
};

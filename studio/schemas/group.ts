import { RiGroupLine } from "react-icons/ri";

export default {
  name: "group",
  title: "Gruppe",
  type: "document",
  icon: RiGroupLine,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "members",
      title: "Medlemmer",
      type: "array",
      of: [{ type: "membership" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
    // prepare({ title, slug, order }) {
    //   return {
    //     title,
    //     subtitle: `${slug} (${order})`
    //   };
    // },
  },
};

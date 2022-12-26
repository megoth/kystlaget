import { RiOrganizationChart } from "react-icons/ri";

export default {
  name: "membership",
  title: "Medlemskap",
  type: "object",
  icon: RiOrganizationChart,
  fields: [
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "person" }],
    },
    {
      name: "association",
      title: "Organisasjon",
      type: "reference",
      to: [{ type: "association" }],
    },
    {
      name: "note",
      title: "Notat",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "person.name",
      subtitle: "title"
    },
    // prepare({ title, subtitle }) {
    //   return {
    //     title,
    //     subtitle: subtitle || "Medlem"
    //   };
    // },
  },
};

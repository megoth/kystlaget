import { FiMenu } from "react-icons/fi";

export default {
  name: "navigation",
  title: "Navigering",
  type: "object",
  icon: FiMenu,
  fields: [
    {
      name: "items",
      type: "array",
      title: "Meny elementer",
      of: [{ type: "navigationItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "navId.current",
    },
    // prepare({ title, subtitle }) {
    //   return {
    //     title,
    //     subtitle,
    //     media: GrNavigate,
    //   };
    // },
  },
};

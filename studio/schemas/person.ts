import { RiUserLine } from "react-icons/ri";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: RiUserLine,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

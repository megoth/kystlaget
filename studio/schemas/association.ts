import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default {
  name: "association",
  title: "Organisasjon",
  type: "document",
  icon: HiOutlineOfficeBuilding,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "logo"
    },
  },
};

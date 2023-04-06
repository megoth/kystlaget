import { BsClock } from "react-icons/bs";

export default {
  name: "historyEvent",
  title: "Historie",
  type: "document",
  icon: BsClock,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "date",
      title: "Dato",
      description: "Nødvendig",
      type: "date",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "sources",
      title: "Kilder",
      description: "Helst en eller flere",
      type: "array",
      of: [{ type: "source" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      year: "year",
      major: "major",
      slug: "slug.current",
    },
    // prepare({ title, major, slug }) {
    //   return {
    //     title,
    //     subtitle: slug,
    //     media: major ? AiFillStar : AiOutlineStar,
    //   };
    // },
  },
};

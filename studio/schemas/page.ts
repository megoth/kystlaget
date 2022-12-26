import { RiPagesLine } from "react-icons/ri";

// The order of these components reflect the order presented in Sanity Studio
export const ComponentTypes = {
  TEXT: "text-component",
  IMAGE: "image-component",
  ALBUMS: "albums-component",
  GROUP: "group-component",
  FILE: "file-component",
  SUBPAGES: "subpages-component",
  BUTTON: "button-component",
  BUTTONS: "buttons-component",
  DATA: "data-component",
}

export default {
  name: "page",
  title: "Side",
  type: "document",
  icon: RiPagesLine,
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Nødvendig",
      type: "string",
    },
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Nødvendig",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "parent",
      title: "Foreldreside",
      type: "parentPage",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "event",
      title: "Presentasjon som hendelse",
      description: "Om du ønsker å ha med teksten i tidslinjen, fyll ut informasjonen her",
      type: "pageEvent",
    },
    {
      name: "components",
      title: "Innhold",
      type: "array",
      of: Object.entries(ComponentTypes).map(([key, value]) => ({
        type: value
      })),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
    // prepare({ title, subtitle, slug }) {
    //   return {
    //     title,
    //     subtitle,
    //     media: RiPagesLine,
    //   };
    // },
  },
};

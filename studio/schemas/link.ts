export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "internalLink",
      title: "Lenke til intern side",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "externalUrl",
      title: "Lenke til ekstern side",
      type: "string",
    },
  ],
};

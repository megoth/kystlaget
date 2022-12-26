import { ComponentTypes } from './page';

export default {
  name: ComponentTypes.ALBUMS,
  title: "Album",
  type: "object",
  fields: [
    {
      name: "albums",
      title: "Album",
      type: "array",
      of: [{ type: "reference", to: { type: "album" } }],
    },
  ],
};

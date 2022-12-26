import { FiSettings } from "react-icons/fi";
import { StructureBuilder } from 'sanity/desk';

export default (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Innstillinger")
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("2edbaa9d-d747-40dd-82aa-af1ad87a59e2")
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(
          (listItem) => !["siteSettings"].includes(listItem.getId()!)
        ),
    ]);

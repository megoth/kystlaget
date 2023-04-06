import { SchemaTypeDefinition } from '@sanity/types';

import blockContent from "./blockContent";
import source from "./source";
import historyEvent from "./historyEvent";
import siteSettings from "./siteSettings";
import page from "./page";
import albumsComponent from "./albumsComponent";
import buttonComponent from "./buttonComponent";
import buttonsComponent from "./buttonsComponent";
import groupComponent from "./groupComponent";
import imageComponent from "./imageComponent";
import subpagesComponent from "./subpagesComponent";
import textComponent from "./textComponent";
import navigation from "./navigation";
import link from "./link";
import navigationItem from "./navigationItem";
import dataComponent from "./dataComponent";
import album from "./album";
import photo from "./photo";
import parentPage from "./parentPage";
import group from "./group"
import membership from "./membership"
import person from "./person"
import company from "./association"
import fileComponent from "./fileComponent";
import pageEvent from "./pageEvent";

export const schemaTypes: Array<SchemaTypeDefinition> = [
  // The following are document types which will appear
  // in the studio.
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  page, // TODO fix preview
  siteSettings,
  pageEvent,
  albumsComponent,
  buttonComponent, // TODO fix preview
  buttonsComponent, // TODO fix preview
  dataComponent, // TODO fix preview
  groupComponent,
  fileComponent, // TODO fix preview
  imageComponent,
  subpagesComponent,
  textComponent, // TODO fix preview
  link,
  navigationItem,
  navigation, // TODO fix preview
  album,
  photo,
  parentPage,
  group, // TODO fix preview
  person,
  company,
  membership, // TODO fix preview
  historyEvent, // TODO fix preview
  source, // TODO fix preview
];

export default schemaTypes;

import React from "react";
import { imageBuilder } from "../../lib/sanity";
import { imageStyle, linkStyle, listStyle } from "./styles.css";
import Link from "../link";
import { asThumbnail } from '../../lib/images';
import { PAGE_SLUGS } from '../../lib/constants';

interface Props {
  albums: Array<Sanity.Schema.Album>;
}

export default function Albums({ albums }: Props) {
  return (
    <ul className={listStyle}>
      {albums
        .filter((album) => !!album.images[0])
        .map(({ _id, slug, name, images }) => (
          <li key={_id}>
            <Link
              href={`/${PAGE_SLUGS.GALLERY}/${slug.current}`}
              className={linkStyle}
            >
              <img className={imageStyle} src={asThumbnail(imageBuilder(images[0].image), 575).url()}/>
              <div>{name}</div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

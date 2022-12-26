import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { maxPageWidth, squareSize, thumbnailHeight, thumbnailWidth } from '../components/styles.css';

export function asSquare(image: ImageUrlBuilder, size: number = squareSize): ImageUrlBuilder {
  return image.height(size).width(size);
}

export function asThumbnail(image: ImageUrlBuilder, width: number = thumbnailWidth): ImageUrlBuilder {
  const height = Math.round(thumbnailHeight * (width / thumbnailWidth));
  return image.height(height).width(width);
}

export function asFullSize(image: ImageUrlBuilder): ImageUrlBuilder {
  return image.fit("fillmax").width(maxPageWidth);
}

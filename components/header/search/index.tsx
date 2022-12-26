import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { searchStyle } from './styles.css';
import clsx from 'clsx';
import { PAGE_SLUGS, TRANSLATIONS } from '../../../lib/constants';

interface HeaderSearchProps {
  className?: string;
}

export default function HeaderSearch({ className }: HeaderSearchProps) {
  return (
    <Link href={`/${PAGE_SLUGS.SEARCH}`}>
      <a className={clsx(searchStyle, className)}>
        <span>{TRANSLATIONS.SEARCH}</span>
        <BiSearch size={"2.3em"} />
      </a>
    </Link>
  )
}

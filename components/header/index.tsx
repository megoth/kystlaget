import React, { useRef } from "react";
import { headerStyle, } from "./styles.css";
import Container from "../container";
import NavigationMenu from '../navigation-menu';
import { SiteSettingsQuery } from '../../lib/api/site-settings';
import Link from 'next/link';

interface Props {
  className?: string;
  siteSettings: SiteSettingsQuery;
}

export default function Header({ className, siteSettings }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Container ref={ref}>
      <header className={className}>
        <Link href={"/"}>
          <a className={headerStyle}>
            {siteSettings.title}
          </a>
        </Link>
        <NavigationMenu siteSettings={siteSettings} />
      </header>
    </Container>
  );
}

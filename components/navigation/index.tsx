import React from "react";
import Link from "../link";
import { LinkQuery } from '../../lib/api/site-settings';

interface Props {
  navItems?: Array<LinkQuery>;
  type: string;
  ariaLabel: string;
}

export default function Navigation({ navItems, type, ariaLabel }: Props) {
  return (
    <nav className={type} aria-label={ariaLabel}>
      <ul>
        {navItems?.map((item, index) => (
          <li key={`navigation-${type}-${index}`}>
            <Link {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from "react";
import Navigation from '../navigation';
import { SiteSettingsQuery } from '../../lib/api/site-settings';
import { menuStyle } from './styles.css';

interface NavigationMenuProps {
  siteSettings: SiteSettingsQuery
}

export default function NavigationMenu({ siteSettings }: NavigationMenuProps) {
  return (
    <div className={menuStyle}>
      <Navigation
        navItems={siteSettings?.mainNavItems}
        type={"main-menu"}
        ariaLabel="Hovedmeny"
      />
    </div>
  )
}

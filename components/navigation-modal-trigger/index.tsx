import React, { MutableRefObject, useContext, useEffect } from 'react';
import { headerHeight } from '../header/styles.css';
import NavigationModalTriggerAnimation from './animation';
import NavigationContext from '../../contexts/navigationContext';
import { triggerStyle, triggerTextStyle } from './styles.css';
import clsx from 'clsx';
import { TRANSLATIONS } from '../../lib/constants';

export interface MenuProps {
  containerRef: MutableRefObject<HTMLDivElement>;
  className?: string;
}

export default function NavigationModalTrigger({ containerRef, className }: MenuProps) {
  const { isOpen, setOpen } = useContext(NavigationContext);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.style.position = "fixed";
      containerRef.current.style.top = "0px";
      containerRef.current.style.width = `${containerRef.current.parentElement.clientWidth}px`;
      containerRef.current.parentElement.style.paddingTop = `${headerHeight}px`;
    } else if (containerRef.current) {
      containerRef.current.style.removeProperty("position");
      containerRef.current.style.removeProperty("top");
      containerRef.current.style.removeProperty("width");
      containerRef.current.parentElement.style.removeProperty("padding-top");
    }
  }, [isOpen]);

  return (
    <button
      className={clsx(triggerStyle, className)}
      type="button"
      onClick={() => setOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      <span className={triggerTextStyle}>{TRANSLATIONS.MENU}</span>
      <NavigationModalTriggerAnimation open={isOpen} />
    </button>
  )
}

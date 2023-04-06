import { HistoryEventForListQuery } from "./history";
import { PageUpdateQuery } from "./page-updates";
import { SubpageQuery } from './pages';

// IMPORTANT!!!
// Make sure that dataModules and DataModules contains the same keys
// Also update /components/data-component.tsx

export const dataModules = [
  "historyEvents",
  "pageUpdates",
  "subpages"
];

export interface DataModules {
  historyEvents?: Array<HistoryEventForListQuery>;
  pageUpdates?: Array<PageUpdateQuery>;
  subpages?: Array<SubpageQuery>;
}

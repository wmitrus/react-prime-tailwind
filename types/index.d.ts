import { ReactNode } from 'react';
import {
  Page,
  AppBreadcrumbProps,
  Breadcrumb,
  BreadcrumbItem,
  MenuProps,
  MenuModel,
  //   AppSubMenuProps,
  LayoutConfig,
  LayoutState,
  //   AppBreadcrumbState,
  Breadcrumb,
  LayoutContextProps,
  MailContextProps,
  MenuContextProps,
  ChatContextProps,
  TaskContextProps,
  AppConfigProps,
  NodeRef,
  AppTopbarRef,
  //   MenuModelItem,
  AppMenuItemProps,
  AppMenuItem,
  TableSize,
  TableSizeOption,
} from './layout';

import { ConnectionType } from './connections';

import {
  ToastContextValue,
  ToastSeverity,
  IShowToast,
} from './prime/PrimeToast';

type ChildContainerProps = {
  children: ReactNode;
};

export type {
  Page,
  AppBreadcrumbProps,
  Breadcrumb,
  BreadcrumbItem,
  MenuProps,
  MenuModel,
  LayoutConfig,
  LayoutState,
  Breadcrumb,
  LayoutContextProps,
  MailContextProps,
  MenuContextProps,
  ChatContextProps,
  TaskContextProps,
  AppConfigProps,
  NodeRef,
  AppTopbarRef,
  AppMenuItemProps,
  ChildContainerProps,
  AppMenuItem,
  TableSize,
  TableSizeOption,
  ConnectionType,
  ToastContextValue,
  ToastSeverity,
  IShowToast,
};

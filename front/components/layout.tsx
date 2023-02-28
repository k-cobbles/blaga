import React from 'react';
import Nav from "./nav";
import { ApiCategoryCategory, SharedSeo } from 'types/schemas';

import { Category } from 'types/Category';

type LayoutProps = React.PropsWithChildren<{
  categories: Category[];
  seo?: SharedSeo
}>

const Layout = ({ children, categories, seo }: LayoutProps) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;

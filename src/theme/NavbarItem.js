import React from 'react';
import OriginalNavBarItem from '@theme-original/NavbarItem';
import { useLocation }  from '@docusaurus/router';

export default function NavbarItem(props) {
  const { docsPluginId, type } = props
  const { pathname } = useLocation()

  if (type === 'docsVersionDropdown'){
    const paths = pathname.split('/')
    const unVertioned = ['cloud', 'training']
    if (unVertioned.includes(paths[1]) || unVertioned.includes(paths[2])) {
      return null;
    }
  }

  return (
    <>
      <OriginalNavBarItem {...props} />
    </>
  );
}
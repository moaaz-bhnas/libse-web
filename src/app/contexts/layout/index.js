import { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [ sellerSidebarExpanded, setSellerSidebarExpanded ] = useState(true);

  console.log('sellerSidebarExpanded: ', sellerSidebarExpanded);

  return (
    <LayoutContext.Provider value={{ sellerSidebarExpanded, setSellerSidebarExpanded }}>
      {children}
    </LayoutContext.Provider>
  )
}
import React, { createContext, useContext, useState } from "react";

 const SidebarContext = createContext();

export const ContextLayout = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
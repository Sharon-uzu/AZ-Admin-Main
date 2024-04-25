import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import ManagementProvider from "./contextApi/ManagementContext";
import SearchProvider from "./contextApi/SearchContext";

function App() {
  return (
    <ProSidebarProvider>
      <SearchProvider>
        <ManagementProvider>
          <Routes />
        </ManagementProvider>
      </SearchProvider>
    </ProSidebarProvider>
  );
}

export default App;

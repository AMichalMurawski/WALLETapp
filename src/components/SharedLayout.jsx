import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TableFilters from "./TableFilters/TableFilters";


export const SharedLayout = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
        <TableFilters />
      </Suspense>
    </div>
  );
};

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

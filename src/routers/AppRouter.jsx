import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import AllDevices from "../pages/AllDevices";
import AddDevice from "../pages/AddDevice";
import { MaintenanceOperations } from "../pages/MaintenanceOperations";
import { ReadyForDelivery } from "../pages/ReadyForDelivery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={<MainLayout />} /> */}
      <Route path="/alldevices" element={<AllDevices />} />
      <Route path="/home" element={<AllDevices />} />
      <Route path="/addDevice" element={<AddDevice />} />
      <Route
        path="/maintenance-operations"
        element={<MaintenanceOperations />}
      />
      <Route path="/ready-for-delivery" element={<ReadyForDelivery />} />
    </>
  )
);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

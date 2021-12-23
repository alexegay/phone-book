import * as React from "react";
import {  Navigate } from "react-router-dom";
import { Login } from "../pages";

interface Props {
  component: React.ComponentType;
  path?: string;
}
export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  if (!isAuthenticated) {
    return <Login/>;
  }

  return <Navigate to="/" />;
};

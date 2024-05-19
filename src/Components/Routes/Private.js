import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const response = await axios.get("/api/v1/auth/user-auth");
        if (response.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.log(error);
        setOk(false);
      }
    };

    if (auth?.token) {
      checkUserAuthentication();
    }
  }, [auth?.token]);

  if (!auth?.token) {
    // User is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return ok ? <Outlet /> : <Spinner />;
}
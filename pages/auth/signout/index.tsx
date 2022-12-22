import React, { useEffect } from "react";
import Router from "next/router";
import axios from "axios";

function LogOut() {
  const router = Router;
  useEffect(() => {
    axios("/api/auth/signout")
      .then((response) => {
        if (response.status === 200) return router.push("/auth/signin");
      })
      .catch(() => router.push("/auth/signin"));
  }, []);

  return (
    <section className="flex items-center justify-center w-full h-screen font-bold text-4xl">
      <h1>Signing Out...</h1>
    </section>
  );
}

export default LogOut;

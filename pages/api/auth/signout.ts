import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default function signOut(req: NextApiRequest, res: NextApiResponse) {
  const { authToken } = req.cookies
  if(!authToken || !authToken.length) return res.status(401).json({msg: "No token"})
  
  const serialized = cookie.serialize("authToken", "", {
    httpOnly: false,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  res.setHeader("Set-Cookie", serialized);
  return res.send("Log out successfully");
}

"use client";

import { createContext } from "react";

export const defaultContext = {
  name: "",
  database: ""
};

export const AppContext = createContext(defaultContext);

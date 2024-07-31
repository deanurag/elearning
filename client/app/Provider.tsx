"use client"
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/features/store";

interface ProvidersProps {
  children: any;
}

export function Providers({ children }: ProvidersProps) {
  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  // this forces a rerender
  setHydrated(true)
}, [])

if(!hydrated) {
  // this returns null on first render, so the client and server match
  return null
}
  return <Provider store={store}>{children}</Provider>;
}

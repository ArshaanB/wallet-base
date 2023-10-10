"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

import { AppContext, defaultContext } from "../contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

function withAppContext(Component: React.ComponentType<any>) {
  return function WrapperComponent(props: React.PropsWithChildren<any>) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      // Once the component is mounted, we know we're on the client
      setIsClient(true);
    }, []);

    if (!isClient) {
      // If we're on server, just render the component without context
      return <Component {...props} />;
    }

    // If we're on client, render the component with context
    return (
      <AppContext.Provider value={defaultContext}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default withAppContext(RootLayout);

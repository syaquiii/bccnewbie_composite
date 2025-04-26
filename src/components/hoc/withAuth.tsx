// src/components/hoc/withAuth.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/utils/checkAuth";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      const { isAuthenticated } = checkAuth();
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };
};

export default withAuth;

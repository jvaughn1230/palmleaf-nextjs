import { useMemo } from "react";

const useIsProduction = () => {
  return useMemo(() => process.env.NODE_ENV === "production", []);
};

export default useIsProduction;

import { useEffect } from "react";

const emptyFunction = () => {};

const isMountedClb = (isMounted: boolean, clb: (p: any) => any, params: any) => {
  if (isMounted) {
    clb(params);
  }
};

type asyncEffectType = {
  setIsLoading: (d?: any) => any;
  asyncFunction: (d?: any) => any;
  setData: (d?: any) => any;
  handleError?: (d?: any) => any;
};

export const useAsyncEffect = (
  { setIsLoading = emptyFunction, asyncFunction, setData = emptyFunction, handleError = emptyFunction } : asyncEffectType,
  dependencies: any[] = [],
) => {
  useEffect((): any => {
    let isMounted = true;
    (async () => {
      isMountedClb(isMounted, setIsLoading, true);
      try {
        const data = await asyncFunction();

        isMountedClb(isMounted, setData, data);
      } catch (e: any) {
        if(handleError) handleError();
        console.error(e);
      }

      isMountedClb(isMounted, setIsLoading, false);
    })();

    return () => (isMounted = false);
  }, dependencies);
};

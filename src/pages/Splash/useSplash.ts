import { useEffect } from 'react'
import { UseSplashProps } from "./types/UseSplashProps";

export function useSplash({ navigation }: UseSplashProps) {
  //here API gonna be called;

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 2000);
  }, []);
}
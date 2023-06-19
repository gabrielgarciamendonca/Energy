import { SplashProps } from "./types/SplashProps";
import { SplashView } from "./SplashView";
import { useSplash } from "./useSplash";

export function Splash({ ...props }: SplashProps) {
  useSplash(props);

  return (
    <SplashView />
  )
}
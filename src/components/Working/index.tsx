import { WorkingProps } from "./types/WorkingProps";
import { WorkingView } from "./WorkingView";
import { useWorking } from "./useWorking";
import { WorkingViewProps } from "./types/WorkingViewProps";

export function Working({ ...props }: WorkingProps) {
  const viewProps = useWorking(props);

  return (
    <WorkingView {...viewProps} />
  )
}
import { useCallback, useState, useEffect } from 'react';
import { UseWorkingProps } from "./types/UseWorkingProps";
import { WorkingViewProps } from "./types/WorkingViewProps";

export function useWorking({ status }: UseWorkingProps): WorkingViewProps {
  const [isOk, setIsOk] = useState(false);

  const onPress = useCallback(async () => {
    setIsOk(true);
  }, []);

  const title = status === 'today' ? 'sua usina está gerando hoje' : 'sua usina não está gerando hoje';

  return { onPress, isOk, isWorking: status === 'today', title }
}
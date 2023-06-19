import { PressableProps } from "react-native";

export type WorkingViewProps = PressableProps & {
  isOk: boolean;
  isWorking: boolean;
  title: string;
};
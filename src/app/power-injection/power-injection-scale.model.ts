export type PowerInjectionScale = Readonly<{
  veryPositive: ColorAndIcon;
  positive: ColorAndIcon;
  negative: ColorAndIcon;
  veryNegative: ColorAndIcon;
  extremelyNegative: ColorAndIcon;
}>

export type ColorAndIcon = Readonly<{
  color: string;
  icon: string;
}>

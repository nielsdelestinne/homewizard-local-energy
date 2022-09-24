export type P1Data = Readonly<{
  currentInjectedPowerInKwh: NamedValue<number>;
  totalGasInM3: NamedValue<number>;
  totalExportedPowerT1InKwh: NamedValue<number>;
  totalExportedPowerT2InKwh: NamedValue<number>;
  totalImportedPowerT1InKwh: NamedValue<number>;
  totalImportedPowerT2InKwh: NamedValue<number>;
  wifiStrength: NamedValue<number>
}>

export type NamedValue<T extends string | number> = Readonly<{
  name: string,
  value: T
}>

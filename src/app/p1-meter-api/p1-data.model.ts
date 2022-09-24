export type P1Data = Readonly<{
  currentInjectedPower: NamedNumericalValue;
  totalGasInM3: NamedNumericalValue;
  totalExportedPowerT1: NamedNumericalValue;
  totalExportedPowerT2: NamedNumericalValue;
  totalImportedPowerT1: NamedNumericalValue;
  totalImportedPowerT2: NamedNumericalValue;
  wifiStrength: NamedNumericalValue
}>

export type NamedNumericalValue = Readonly<{
  name: string,
  value: number,
  unit: Unit
}>

export enum Unit {
  Kwh = "Kwh",
  m3 = "m3",
  percentage = "%",
}

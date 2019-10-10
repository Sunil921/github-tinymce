import { navigator } from '@ephox/dom-globals';
import { Cell } from '@ephox/katamari';

import { Browser } from '../core/Browser';
import { OperatingSystem } from '../core/OperatingSystem';
import { PlatformDetection } from '../core/PlatformDetection';
import { DeviceType } from '../detect/DeviceType';

export type Browser = Browser;
export type OperatingSystem = OperatingSystem;
export type DeviceType = DeviceType;

const platform = Cell<PlatformDetection>(PlatformDetection.detect(navigator.userAgent));

export const detect = (): PlatformDetection => platform.get();

export const override = (overrides: Partial<PlatformDetection>) => {
  platform.set({
    ...platform.get(),
    ...overrides
  });
};

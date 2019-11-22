import { WebPlugin } from '@capacitor/core';
import { CameraOverlayPlugin } from './definitions';

export class CameraOverlayWeb extends WebPlugin implements CameraOverlayPlugin {
  constructor() {
    super({
      name: 'CameraOverlay',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CameraOverlay = new CameraOverlayWeb();

export { CameraOverlay };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CameraOverlay);

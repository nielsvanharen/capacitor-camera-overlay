declare module "@capacitor/core" {
  interface PluginRegistry {
    CameraOverlay: CameraOverlayPlugin;
  }
}

export interface CameraOverlayPlugin {
  start({}): Promise<{}>;
  stop(): Promise<{}>;
  capture(): Promise<{ value: string }>;
}

declare module "@capacitor/core" {
  interface PluginRegistry {
    CameraOverlay: CameraOverlayPlugin;
  }
}

export interface CameraOverlayPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}


  Pod::Spec.new do |s|
    s.name = 'CapacitorCameraOverlay'
    s.version = '0.0.1'
    s.summary = 'HTML overlay on default camera plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/nielsvanharen/capacitor-camera-overlay.git'
    s.author = 'Niels van Haren'
    s.source = { :git => 'https://github.com/nielsvanharen/capacitor-camera-overlay.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end
## Android Studio.
* Open android studio.
* sudo nano $HOME/.bash_profile (add bellow file).
```javascript
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```
* Install KVM: sudo apt install qemu-kvm.
* Setting user KVM: sudo adduser lobot kvm, ls -al /dev/kvm, sudo adduser $USER kvm, sudo adduser julia kvm, and sudo chown julia /dev/kvm.
* File - Setting - Appearance and Behavior - System Settings - Android SDK - checklist Android 10.0+ (R), Android 10.0 (Q) and Android 9.0 (Pie) on SDK Platforms - Go to SDK Tools - Checklist Android SDK build-Tools, Android Emulator, and Android SDK Platform-Tools - Aplly - Finish.

## Xiaomi.
* connection react native to xiaomi users: 
1. setting - about phone - press MIUI version 10 times (you are developer).
2. setting - additional settings - Developer options - Debugging - USB Debugging (ON) - Install Via USB (ON).
3. Connect phone to laptop and set USB transfer file.
4. Done.
* run: npx react-native start (localhost) and npx react-native run-android (run on android studio or devices).
* accept instalations via USB.
* if SDK not found: create local.properties on android folder. and where is your android sdk file when install. if you don't know the directory when want passing into local.properties when we found, we can use PWD on terminal (print working directory).
* install adb: sudo apt-get install android-tools-adb android-tools-fastboot.
* adb devices to see how many devices attached.
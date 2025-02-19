import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mobile.app",
  appName: "mobileApp",
  webDir: "web-app/dist",
  // Removed bundledWebRuntime based on capacitor update
  // bundledWebRuntime configuration option has been removed. If you had it set it to false you can safely remove it. If you had it set to true you'll have to use a bundler to bundle @capacitor/core code within your app.
  // bundledWebRuntime: false,
  // Enable the url and cleartext for live reload. And comment out the line hostname
  // server: {
  //   url: `http://192.168.0.203:4000/`,
  //   cleartext: true,
  //   // hostname: 'localhost',
  // },
};

export default config;

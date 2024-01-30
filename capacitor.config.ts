import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'contact.manager',
  appName: 'Contact Manager',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

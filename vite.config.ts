import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    name: "Arcade VR",
    short_name: "avr",
    description: "A VR Arcade UI",
    display: "fullscreen",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
    // Hide Address Bar in pwa
    // https://stackoverflow.com/questions/14754913/how-to-hide-the-address-bar-in-a-full-screen-iphone-or-android-web-app
  },
};





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})



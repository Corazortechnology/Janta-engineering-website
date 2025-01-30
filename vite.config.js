// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     chunkSizeWarningLimit: 1600,
//     outDir: "dist",
//   },
//   plugins: [react()],
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/', // Ensures that the application works with Vercel routing
//   build: {
//     chunkSizeWarningLimit: 1600,
//     outDir: "dist",
//   },
//   plugins: [react()],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/', // Ensures correct routing
  server: {
    port: 8080, // Ensure Azure App Service runs on the correct port
    host: "0.0.0.0", // Allows external access in Azure environment
    strictPort: true, // Ensures Vite doesn't fallback to another port
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "dist",
  },
  plugins: [react()],
});

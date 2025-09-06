import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    timeout: 30000,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        { name: "Chromium", use: { browserName: "chromium" } }
    ],
    reporter: [["list"], ["html", { open: "never" }]],
    webServer: {
        command: "npx http-server . -p 3000",
        url: "http://127.0.0.1:3000",
        reuseExistingServer: !process.env.CI,
    },
});
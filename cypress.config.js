const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "http://localhost:5173",
      env: {
        apiUrl: "https://api.escuelajs.co/api/v1"
      },
      retries: {
        runMode: 2, // inicialização
        openMode: 0, // repetição se falhar
      },
      video: true, 
      screenshotOnRunFailure: true,
    },
});

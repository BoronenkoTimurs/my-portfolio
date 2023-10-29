const { remote } = require("webdriverio");

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  await browser.url("https://tbpage.netlify.app");
  const title = await browser.getTitle();
  console.log("This title - " + title);

  await browser.deleteSession();
})().catch((e) => console.error(e));

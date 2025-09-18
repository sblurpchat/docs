import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sblurp",
  description: "Communities for humans",
  base: "/sblurp-docs/", // https://sblurpchat.github.io/sblurp-docs/
  themeConfig: {
    logo: "/images/sblurp-logo-512px.png",
    sidebar: [
      {
        text: "Contents",
        items: [{ text: "Introduction", link: "/" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/sblurpchat" }],
    footer: {
      message: "Released under the CC-BY-4.0 License.",
      copyright: "Copyright © 2025 sblurp.chat",
    },
  },
});

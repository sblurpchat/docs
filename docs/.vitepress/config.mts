import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sblurp",
  description: "Communities for humans",
  base: "/docs/", // https://sblurpchat.github.io/docs/
  themeConfig: {
    logo: "/images/sblurp-logo-512px.png",
    sidebar: [
      {
        text: "Contents",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Product", link: "/product" },
          { text: "Business", link: "/business" },
          { text: "Architecture", link: "/architecture" },
          { text: "Clients", link: "/clients" },
          { text: "Plugins", link: "/plugins" },
          { text: "Privacy and Safety", link: "/privacy-and-safety" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/sblurpchat" }],
    footer: {
      message: "Released under the CC-BY-4.0 License.",
      copyright: "Copyright © 2025 sblurp.chat",
    },
  },
});

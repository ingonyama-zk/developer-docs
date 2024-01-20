module.exports = {
  GettingStartedSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "ICICLE",
      link: {
        type: `doc`,
        id: 'icicle/overview',
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Getting started",
          id: "icicle/introduction"
        },
        {
          type: "doc",
          label: "ICICLE Provers",
          id: "icicle/integrations"
        },
        {
          type: "doc",
          label: "Golang bindings",
          id: "icicle/golang-bindings",
        },
        {
          type: "doc",
          label: "Rust bindings",
          id: "icicle/rust-bindings",
        },
        {
          type: "doc",
          label: "Supporting additional curves",
          id: "icicle/supporting-additional-curves",
        },
      ]
    },
    {
      type: "doc",
      label: "ZK Containers",
      id: "ZKContainers",
    },
    {
      type: "doc",
      label: "Ingonyama Grant program",
      id: "grants",
    },
    {
      type: "doc",
      label: "Contributor guide",
      id: "contributor-guide",
    },
    {
      type: "category",
      label: "Additional Resources",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "YouTube",
          href: "https://www.youtube.com/@ingo_ZK"
        },
        {
          type: "link",
          label: "Ingonyama Blog",
          href: "https://www.ingonyama.com/blog"
        },
        {
          type: "link",
          label: "Ingopedia",
          href: "https://www.ingonyama.com/ingopedia"
        },
        {
          href: 'https://github.com/ingonyama-zk',
          type: "link",
          label: 'GitHub',
        }
      ]
    }
  ],
};

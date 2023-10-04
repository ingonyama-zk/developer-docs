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
          label: "Developer Bindings",
          id: "icicle/bindings",
        },
        {
          type: "doc",
          label: "A guide to GPU development",
          id: "icicle/gpu-development-guide",
        },
      ]
    },
    {
      type: "category",
      label: "Blaze",
      link: {
        type: `doc`,
        id: 'blaze/overview',
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Getting started",
          id: "blaze/introduction"
        },
        {
          type: "doc",
          label: "Developer Bindings",
          id: "blaze/bindings",
        },
        {
          type: "doc",
          label: "A guide to FPGA development",
          id: "blaze/gpu-development-guide",
        },
      ]
    },
    {
      type: "category",
      label: "Moon Math Club",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "MSM Tutorial",
          id: "blaze/introduction"
        },
        {
          type: "doc",
          label: "FFT Tutorial",
          id: "blaze/introduction"
        },
        
      ]
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
      ]
    }
  ],
};

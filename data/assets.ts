/**
 * Central asset map.
 *
 * The `https://www.figma.com/api/mcp/asset/...` URLs only resolve while the
 * Figma desktop app + MCP server are running locally — they will 404 in any
 * deployed environment. Before shipping, export each asset from Figma
 * (right-click layer → "Copy as" / Export) into `public/...` using the paths
 * below, then delete the `FIGMA_*` fallbacks.
 */

export const assets = {
  hero: "/images/hero.jpg",
  logoIrata: "/logos/logo-irata.svg",
  logoGwo: "/logos/logo-gwo.svg",
  logoPetzl: "/logos/logo-petzl.svg",
  logoDv: "/logos/logo-dinamiche-verticali.svg",
  logoDvFormazione: "/logos/logo-dinamiche-verticali-formazione.svg",
  arrowOutward: "/icons/arrow-outward.svg",
  socialInstagram: "/icons/instagram.svg",
  socialFacebook: "/icons/facebook.svg",
  socialLinkedin: "/icons/linkedin.svg",
  socialYoutube: "/icons/youtube.svg",
} as const;

// Original Figma MCP asset URLs, kept only as a reference for re-exporting.
export const FIGMA_SOURCE_URLS = {
  hero: "https://www.figma.com/api/mcp/asset/0e8e8eac-9525-4b73-bff1-1a0d40a34cdb",
  logoIrata: "https://www.figma.com/api/mcp/asset/09094376-8f18-4977-b1ad-13fdc8e690f5",
  logoGwo: "https://www.figma.com/api/mcp/asset/40d4a52d-b8b7-43d9-83f7-ec3b3fd8e28c",
  logoPetzl: "https://www.figma.com/api/mcp/asset/6a2f7846-ee99-4591-ba85-589eb360e412",
  logoDv: "https://www.figma.com/api/mcp/asset/2d87b1c3-f9ad-4ec0-ac93-cfd1c91d4d1d",
  arrowOutward: "https://www.figma.com/api/mcp/asset/2de38d29-653a-4ec3-8a25-79dff6ded063",
  arrowOutward1: "https://www.figma.com/api/mcp/asset/d879ba60-6110-4ca7-8a32-f83a34f6d32b",
  socialInstagram: "https://www.figma.com/api/mcp/asset/2781408e-2c0d-4f9c-b7e8-6d3cca0e0d2d",
  socialFacebook: "https://www.figma.com/api/mcp/asset/ca81bf67-821c-48f5-b7d9-236d39803b68",
  socialLinkedin: "https://www.figma.com/api/mcp/asset/7e92b7e6-0bb5-48cd-9f62-a5bad4bb146b",
  socialYoutube: "https://www.figma.com/api/mcp/asset/30469f02-1942-4432-9cf9-99c4ee897b1d",
} as const;

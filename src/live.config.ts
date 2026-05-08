// EmDash live collection config placeholder.
//
// The first-pass Kingdom Factor build verifies as a static Astro site.
// During the planned EmDash runtime phase, after the Railway memory cap is fixed and provisioning is approved, promote the
// optionalRuntimeDependencies.emdashCmsIfApproved packages from package.json, then replace this file with:
//
// import { defineLiveCollection } from "astro:content";
// import { emdashLoader } from "emdash/runtime";
//
// export const collections = {
//   _emdash: defineLiveCollection({ loader: emdashLoader() }),
// };

export const collections = {};

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Matomo tracking
// https://docs.astro.build/en/guides/typescript/#extending-window-and-globalthis
interface Window {
  _paq: any[]
}

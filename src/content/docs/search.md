---
title: Search
description: Searching the Apple Music catalog
---

The `MusicKit` class provides a `search()` method that queries the Apple Music catalog.

## Basic Search

```ts
const result = await musicKit.search("us", {
  term: "Radiohead",
  types: ["songs", "albums", "artists"]
})
```

## Parameters

| Param | Type | Description |
|---|---|---|
| `storefront` | `string` | Apple Music storefront code (e.g. `"us"`, `"gb"`, `"jp"`) |
| `params.term` | `string` | Search query |
| `params.types` | `SearchType[]` | Resource types to search: `"songs"`, `"albums"`, `"artists"`, `"music-videos"`, `"playlists"`, `"stations"`, and more |
| `params.limit` | `number` | Results per type (1-25, default 10) |
| `params.offset` | `number` | Pagination offset |
| `params.l` | `string` | Language tag (e.g. `"en-us"`) |
| `params.with` | `string[]` | Additional resources to include |

## Pagination

```ts
const page1 = await musicKit.search("us", {
  term: "Radiohead",
  types: ["songs"],
  limit: 5
})

// page1.data.nextOffset contains the next offset value
if (page1.data.nextOffset !== null) {
  const page2 = await musicKit.search("us", {
    term: "Radiohead",
    types: ["songs"],
    limit: 5,
    offset: page1.data.nextOffset
  })
}
```

## Raw Mode

Pass `true` as the third argument to get the unprocessed Apple Music API response:

```ts
const raw = await musicKit.search("us", { term: "Radiohead", types: ["songs"] }, true)
console.log(raw.data.results.songs.href)
console.log(raw.data.results.songs.data[0].attributes.name)
```

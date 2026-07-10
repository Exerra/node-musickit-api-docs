---
title: Resources Overview
description: How resource methods work
---

All resource methods follow the same pattern. They accept a `storefront` and an identifier, plus an optional `raw` flag.

## Parsed vs Raw

By default (no `raw` flag), the API returns flattened objects — the `attributes` are merged to the top level and `relationships` are simplified:

```ts
// Parsed (default)
const song = await musicKit.songs.get("us", "123")
// song.data[0].name          — from attributes
// song.data[0].artistName    — from attributes
// song.data[0].relationships — simplified

// Raw
const raw = await musicKit.songs.get("us", "123", true)
// raw.data[0].attributes.name
// raw.data[0].relationships.albums.href
// raw.data[0].relationships.albums.data
```

## Result Wrapper

All methods return a `MusicKitResultWrapper`:

```ts
{
  status: number   // HTTP status code
  data: T          // The response data
  error: string | null  // Error message if request failed
}
```

## Available Resources

- **[Songs](/resources/songs/)** — get by ID or ISRC
- **[Albums](/resources/albums/)** — get by ID or UPC
- **[Artists](/resources/artists/)** — get by ID
- **[Music Videos](/resources/music-videos/)** — get by ID or ISRC

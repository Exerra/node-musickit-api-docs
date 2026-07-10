---
title: Search
description: Searching the Apple Music catalog
---

The `MusicKit` class provides a `search()` method that queries the catalog.

```ts
const result = await musicKit.search("us", {
  term: "Lemonade aespa",
  types: ["songs", "albums"]
})
```

## Parameters

| Param | Type | Description |
|---|---|---|
| `storefront` | `string` | Apple Music storefront code (`"us"`, `"gb"`, `"jp"`, etc.) |
| `params.term` | `string` | Search query |
| `params.types` | `SearchType[]` | Resource types to include. Supported values: `"songs"`, `"albums"`, `"artists"`, `"music-videos"`, `"playlists"`, `"stations"`, `"activities"`, `"apple-curators"`, `"curators"`, `"record-labels"` |
| `params.limit` | `number` | Max results per type (1–25, default 10) |
| `params.offset` | `number` | Pagination offset (use `nextOffset` from previous response) |
| `params.l` | `string` | Language tag (e.g. `"en-us"`) |
| `params.with` | `string[]` | Additional resources to include |

## Response (parsed)

```json
{
  "status": 200,
  "data": {
    "nextOffset": 1,
    "results": {
      "songs": [
        {
          "id": "1893742010",
          "name": "LEMONADE",
          "artistName": "aespa",
          "albumName": "LEMONADE - The 2nd Album",
          "durationInMillis": 187000,
          "genreNames": ["K-Pop", "Music", "Pop"],
          "hasLyrics": true,
          "isrc": "KRA302600098",
          "releaseDate": "2026-05-28",
          "trackNumber": 2,
          "url": "https://music.apple.com/us/album/lemonade/1893742002?i=1893742010",
          "artwork": {
            "bgColor": "87d700",
            "height": 1400,
            "url": "https://is1-ssl.mzstatic.com/.../{w}x{h}bb.jpg",
            "width": 1400
          },
          "playParams": { "id": "1893742010", "kind": "song" },
          "relationships": {
            "albums": [{ "id": "1893742002", "type": "albums", "href": "/v1/catalog/us/albums/1893742002" }],
            "artists": [{ "id": "1540251304", "type": "artists", "href": "/v1/catalog/us/artists/1540251304" }]
          }
        }
      ],
      "albums": [ /* ... same shape but with album fields */ ]
    }
  },
  "error": null
}
```

## Raw response

Pass `true` as the third argument to get the unprocessed Apple Music API response:

```ts
const raw = await musicKit.search("us", { term: "aespa", types: ["artists"], limit: 1 }, true)
```

<details>
<summary>Raw response (truncated)</summary>

```json
{
  "status": 200,
  "data": {
    "results": {
      "artists": {
        "href": "/v1/catalog/us/search?term=Aespa&types=artists&limit=1",
        "next": "/v1/catalog/us/search?offset=1&term=Aespa&types=artists",
        "data": [
          {
            "id": "1540251304",
            "type": "artists",
            "href": "/v1/catalog/us/artists/1540251304",
            "attributes": {
              "name": "aespa",
              "genreNames": ["K-Pop"],
              "url": "https://music.apple.com/us/artist/aespa/1540251304"
            },
            "relationships": {
              "albums": {
                "href": "/v1/catalog/us/artists/1540251304/albums",
                "next": "/v1/catalog/us/artists/1540251304/albums?offset=25",
                "data": [
                  { "id": "1567326687", "type": "albums", "href": "/v1/catalog/us/albums/1567326687" }
                ]
              }
            }
          }
        ]
      }
    }
  },
  "error": null
}
```

</details>

## Pagination

```ts
const page1 = await musicKit.search("us", {
  term: "aespa",
  types: ["albums"],
  limit: 5
})

const nextOffset = page1.data.nextOffset // e.g. 5

if (nextOffset !== null) {
  const page2 = await musicKit.search("us", {
    term: "aespa",
    types: ["albums"],
    limit: 5,
    offset: nextOffset
  })
}
```

The parsed response provides `nextOffset` — pass it back as `offset` in the next call.

---
title: Music Videos
description: Fetch music videos by ID or ISRC
---

Access via `musicKit.musicVideos`.

## `get(storefront, id, raw?)`

Fetch a music video by its Apple Music catalog ID.

```ts
const mv = await musicKit.musicVideos.get("us", "1896856900")
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1896856900",
      "artistName": "aespa",
      "artwork": {
        "bgColor": "1f2e3e",
        "height": 1080,
        "textColor1": "cbdce8",
        "textColor2": "acc6d9",
        "textColor3": "acbdc9",
        "textColor4": "93aabd",
        "url": "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/.../{w}x{h}mv.jpg",
        "width": 1684
      },
      "durationInMillis": 187030,
      "genreNames": ["K-Pop"],
      "has4K": false,
      "hasHDR": false,
      "isrc": "KRZ262600092",
      "name": "LEMONADE",
      "playParams": { "id": "1896856900", "kind": "musicVideo" },
      "previews": [
        {
          "artwork": {
            "bgColor": "1f2e3e",
            "height": 1080,
            "url": "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/.../{w}x{h}bb.jpg",
            "width": 1684
          },
          "hlsUrl": "https://play-edge.itunes.apple.com/.../playlist.m3u8",
          "url": "https://video-ssl.itunes.apple.com/.../mzvf_....640x480.h264lc.U.p.m4v"
        }
      ],
      "releaseDate": "2026-05-29",
      "url": "https://music.apple.com/us/music-video/lemonade/1896856900",
      "relationships": {
        "albums": [],
        "artists": [
          { "id": "1540251304", "type": "artists", "href": "/v1/catalog/us/artists/1540251304" }
        ]
      }
    }
  ],
  "error": null
}
```

</details>

### Raw

```ts
const raw = await musicKit.musicVideos.get("us", "1896856900", true)
```

<details>
<summary>Raw response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1896856900",
      "type": "music-videos",
      "href": "/v1/catalog/us/music-videos/1896856900",
      "attributes": {
        "artistName": "aespa",
        "artwork": { "bgColor": "1f2e3e", "height": 1080, "width": 1684, "url": "..." },
        "durationInMillis": 187030,
        "genreNames": ["K-Pop"],
        "has4K": false,
        "hasHDR": false,
        "isrc": "KRZ262600092",
        "name": "LEMONADE",
        "playParams": { "id": "1896856900", "kind": "musicVideo" },
        "previews": [{ "artwork": {}, "hlsUrl": "...", "url": "..." }],
        "releaseDate": "2026-05-29",
        "url": "https://music.apple.com/us/music-video/lemonade/1896856900"
      },
      "relationships": {
        "albums": { "href": "/v1/catalog/us/music-videos/1896856900/albums", "data": [] },
        "artists": {
          "href": "/v1/catalog/us/music-videos/1896856900/artists",
          "data": [{ "id": "1540251304", "type": "artists", "href": "/v1/catalog/us/artists/1540251304" }]
        }
      }
    }
  ],
  "error": null
}
```

</details>

## `getByISRC(storefront, isrc, raw?)`

Fetch a music video by its international standard recording code.

```ts
const mv = await musicKit.musicVideos.getByISRC("us", "KRZ262600092")
```

Returns the same shape as `get()`.

---
title: Songs
description: Fetch songs by ID or ISRC
---

Access via `musicKit.songs`.

## `get(storefront, id, raw?)`

Fetch a song by its Apple Music catalog ID.

```ts
const song = await musicKit.songs.get("us", "1893742010")
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1893742010",
      "albumName": "LEMONADE - The 2nd Album",
      "artistName": "aespa",
      "artwork": {
        "bgColor": "87d700",
        "height": 1400,
        "textColor1": "0a0d00",
        "textColor2": "15150b",
        "textColor3": "233500",
        "textColor4": "2c3c09",
        "url": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/95/98/a0/.../{w}x{h}bb.jpg",
        "width": 1400
      },
      "composerName": "Lewis Jankel, Jordan Shaw, Taylor Upsahl & Cyrus Villanueva",
      "discNumber": 1,
      "durationInMillis": 187000,
      "genreNames": ["K-Pop", "Music", "Pop"],
      "hasLyrics": true,
      "isAppleDigitalMaster": false,
      "isrc": "KRA302600098",
      "name": "LEMONADE",
      "playParams": { "id": "1893742010", "kind": "song" },
      "previews": [{ "url": "https://audio-ssl.itunes.apple.com/..." }],
      "releaseDate": "2026-05-28",
      "trackNumber": 2,
      "url": "https://music.apple.com/us/album/lemonade/1893742002?i=1893742010",
      "relationships": {
        "albums": [
          { "id": "1893742002", "type": "albums", "href": "/v1/catalog/us/albums/1893742002" }
        ],
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
const raw = await musicKit.songs.get("us", "1893742010", true)
```

<details>
<summary>Raw response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1893742010",
      "type": "songs",
      "href": "/v1/catalog/us/songs/1893742010",
      "attributes": {
        "albumName": "LEMONADE - The 2nd Album",
        "artistName": "aespa",
        "artwork": { "bgColor": "87d700", "height": 1400, "width": 1400, "url": "..." },
        "durationInMillis": 187000,
        "genreNames": ["K-Pop", "Music", "Pop"],
        "hasLyrics": true,
        "isrc": "KRA302600098",
        "name": "LEMONADE",
        "playParams": { "id": "1893742010", "kind": "song" },
        "releaseDate": "2026-05-28",
        "trackNumber": 2
      },
      "relationships": {
        "albums": {
          "href": "/v1/catalog/us/songs/1893742010/albums",
          "data": [{ "id": "1893742002", "type": "albums", "href": "/v1/catalog/us/albums/1893742002" }]
        },
        "artists": {
          "href": "/v1/catalog/us/songs/1893742010/artists",
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

Fetch a song by its international standard recording code.

```ts
const song = await musicKit.songs.getByISRC("us", "KRA302600098")
```

Returns the same shape as `get()`.

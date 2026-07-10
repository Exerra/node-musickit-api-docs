---
title: Albums
description: Fetch albums by ID or UPC
---

Access via `musicKit.albums`.

## `get(storefront, id, raw?)`

Fetch an album by its Apple Music catalog ID.

```ts
const album = await musicKit.albums.get("lv", "1893742002")
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1893742002",
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
      "copyright": "℗ 2026 SM Entertainment",
      "editorialNotes": {
        "short": "Doubling down on the electronic bangers that made them famous.",
        "tagline": "New Album"
      },
      "genreNames": ["K-Pop", "Music", "Pop"],
      "isCompilation": false,
      "isComplete": true,
      "isMasteredForItunes": false,
      "isSingle": false,
      "name": "LEMONADE - The 2nd Album",
      "playParams": { "id": "1893742002", "kind": "album" },
      "recordLabel": "SM Entertainment",
      "releaseDate": "2026-05-29",
      "trackCount": 12,
      "upc": "888735955211",
      "url": "https://music.apple.com/lv/album/lemonade-the-2nd-album/1893742002",
      "relationships": {
        "artists": [
          { "id": "1540251304", "type": "artists", "href": "/v1/catalog/lv/artists/1540251304" }
        ],
        "tracks": [
          {
            "id": "1893742004",
            "type": "songs",
            "href": "/v1/catalog/lv/songs/1893742004",
            "attributes": {
              "albumName": "LEMONADE - The 2nd Album",
              "artistName": "aespa",
              "durationInMillis": 196000,
              "name": "WDA (Whole Different Animal) (feat. G-DRAGON)",
              "trackNumber": 1
            }
          }
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
const raw = await musicKit.albums.get("lv", "1893742002", true)
```

<details>
<summary>Raw response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1893742002",
      "type": "albums",
      "href": "/v1/catalog/lv/albums/1893742002",
      "attributes": {
        "artistName": "aespa",
        "artwork": { "bgColor": "87d700", "height": 1400, "width": 1400, "url": "..." },
        "copyright": "℗ 2026 SM Entertainment",
        "isCompilation": false,
        "isComplete": true,
        "isSingle": false,
        "name": "LEMONADE - The 2nd Album",
        "playParams": { "id": "1893742002", "kind": "album" },
        "recordLabel": "SM Entertainment",
        "releaseDate": "2026-05-29",
        "trackCount": 12,
        "upc": "888735955211"
      },
      "relationships": {
        "artists": {
          "href": "/v1/catalog/lv/albums/1893742002/artists",
          "data": [{ "id": "1540251304", "type": "artists", "href": "/v1/catalog/lv/artists/1540251304" }]
        },
        "tracks": {
          "href": "/v1/catalog/lv/albums/1893742002/tracks",
          "data": [
            {
              "id": "1893742004",
              "type": "songs",
              "href": "/v1/catalog/lv/songs/1893742004",
              "attributes": {
                "artistName": "aespa",
                "durationInMillis": 196000,
                "name": "WDA (Whole Different Animal) (feat. G-DRAGON)",
                "trackNumber": 1
              }
            }
          ]
        }
      }
    }
  ],
  "error": null
}
```

</details>

## `getByUPC(storefront, upc, raw?)`

Fetch an album by its UPC barcode.

```ts
const album = await musicKit.albums.getByUPC("us", "888735955211")
```

Returns the same shape as `get()`.

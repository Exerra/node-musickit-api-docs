---
title: Artists
description: Fetch artist details
---

Access via `musicKit.artists`.

## `get(storefront, id, raw?)`

Fetch an artist by their Apple Music catalog ID.

```ts
const artist = await musicKit.artists.get("us", "1540251304")
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1540251304",
      "artwork": {
        "bgColor": "d8e953",
        "height": 4000,
        "textColor1": "090d1c",
        "textColor2": "182330",
        "textColor3": "333927",
        "textColor4": "3f4b37",
        "url": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/.../{w}x{h}bb.jpg",
        "width": 4000
      },
      "editorialNotes": {
        "name": "aespa's LIVE TOUR - SYNK : PARALLEL LINE Set List",
        "short": "aespa travel together on the SYNK : PARALLEL LINE tour.",
        "tagline": "Set List: aespa"
      },
      "genreNames": ["K-Pop"],
      "name": "aespa",
      "url": "https://music.apple.com/us/artist/aespa/1540251304",
      "relationships": {
        "albums": [
          { "id": "1567326687", "type": "albums", "href": "/v1/catalog/us/albums/1567326687" },
          { "id": "1540251303", "type": "albums", "href": "/v1/catalog/us/albums/1540251303" },
          { "id": "1893742002", "type": "albums", "href": "/v1/catalog/us/albums/1893742002" }
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
const raw = await musicKit.artists.get("us", "1540251304", true)
```

<details>
<summary>Raw response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "1540251304",
      "type": "artists",
      "href": "/v1/catalog/us/artists/1540251304",
      "attributes": {
        "artwork": { "bgColor": "d8e953", "height": 4000, "width": 4000, "url": "..." },
        "editorialNotes": {
          "name": "aespa's LIVE TOUR - SYNK : PARALLEL LINE Set List",
          "short": "aespa travel together on the SYNK : PARALLEL LINE tour.",
          "tagline": "Set List: aespa"
        },
        "genreNames": ["K-Pop"],
        "name": "aespa",
        "url": "https://music.apple.com/us/artist/aespa/1540251304"
      },
      "relationships": {
        "albums": {
          "href": "/v1/catalog/us/artists/1540251304/albums",
          "next": "/v1/catalog/us/artists/1540251304/albums?offset=25",
          "data": [
            { "id": "1567326687", "type": "albums", "href": "/v1/catalog/us/albums/1567326687" },
            { "id": "1540251303", "type": "albums", "href": "/v1/catalog/us/albums/1540251303" }
          ]
        }
      }
    }
  ],
  "error": null
}
```

</details>

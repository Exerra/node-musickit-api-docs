---
title: Quickstart
description: A complete example from setup to data
---

```ts
import { MusicKit } from "node-musickit-api"

const musicKit = new MusicKit({
  key: {
    id: process.env.MUSICKIT_KEY_ID!,
    teamId: process.env.MUSICKIT_TEAM_ID!,
    p8: process.env.MUSICKIT_P8!
  }
})

// Authenticate first
await musicKit.auth()

// Search for songs + albums
const searchResults = await musicKit.search("us", {
  term: "Lemonade aespa",
  types: ["songs", "albums"],
  limit: 1
})

console.log(searchResults)
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": {
    "nextOffset": 1,
    "results": {
      "albums": [
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
          "genreNames": ["K-Pop", "Music", "Pop"],
          "isSingle": false,
          "name": "LEMONADE - The 2nd Album",
          "playParams": { "id": "1893742002", "kind": "album" },
          "recordLabel": "SM Entertainment",
          "releaseDate": "2026-05-29",
          "trackCount": 12,
          "upc": "888735955211",
          "url": "https://music.apple.com/us/album/lemonade-the-2nd-album/1893742002"
        }
      ],
      "songs": [
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
          "durationInMillis": 187000,
          "genreNames": ["K-Pop", "Music", "Pop"],
          "hasLyrics": true,
          "isrc": "KRA302600098",
          "name": "LEMONADE",
          "playParams": { "id": "1893742010", "kind": "song" },
          "releaseDate": "2026-05-28",
          "trackNumber": 2,
          "url": "https://music.apple.com/us/album/lemonade/1893742002?i=1893742010"
        }
      ]
    }
  },
  "error": null
}
```

</details>

## Fetch by ID

```ts
const song = await musicKit.songs.get("us", "1893742010")

console.log(song.data[0].name)       // "LEMONADE"
console.log(song.data[0].artistName) // "aespa"
console.log(song.data[0].hasLyrics)  // true
```

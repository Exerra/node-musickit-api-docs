---
title: Quickstart
description: A complete working example of node-musickit-api
---

```ts
import { MusicKit } from "node-musickit-api"

const musicKit = new MusicKit({
  key: {
    id: "YOUR_KEY_ID",
    teamId: "YOUR_TEAM_ID",
    p8: `-----BEGIN PRIVATE KEY-----
YOUR_P8_KEY_CONTENT
-----END PRIVATE KEY-----`
  }
})

// Authenticate first
await musicKit.auth()

// Search for songs
const searchResults = await musicKit.search("us", {
  term: "The Beatles",
  types: ["songs", "albums"],
  limit: 5
})

console.log(searchResults.data.results.songs)

// Fetch a specific song by ID
const song = await musicKit.songs.get("us", "123456789")
console.log(song.data[0].name)
console.log(song.data[0].artistName)
```

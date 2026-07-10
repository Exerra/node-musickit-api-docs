---
title: Songs
description: Songs resource methods
---

Access songs via `musicKit.songs`.

## Get by ID

```ts
const song = await musicKit.songs.get("us", "203709340")

// Parsed
console.log(song.data[0].name)           // "Karma Police"
console.log(song.data[0].artistName)     // "Radiohead"
console.log(song.data[0].albumName)      // "OK Computer"
console.log(song.data[0].durationInMillis)
console.log(song.data[0].hasLyrics)

// Raw
const raw = await musicKit.songs.get("us", "203709340", true)
console.log(raw.data[0].attributes.name)
```

## Get by ISRC

```ts
const song = await musicKit.songs.getByISRC("us", "USRW30400010")
```

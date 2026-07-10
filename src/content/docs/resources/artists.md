---
title: Artists
description: Artists resource methods
---

Access artists via `musicKit.artists`.

## Get by ID

```ts
const artist = await musicKit.artists.get("us", "203709340")

console.log(artist.data[0].name)         // "Radiohead"
console.log(artist.data[0].genreNames)   // ["Alternative", "Rock"]
console.log(artist.data[0].url)          // "https://music.apple.com/us/artist/..."
console.log(artist.data[0].relationships.albums)
```

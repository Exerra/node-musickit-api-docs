---
title: Music Videos
description: Music Videos resource methods
---

Access music videos via `musicKit.musicVideos`.

## Get by ID

```ts
const video = await musicKit.musicVideos.get("us", "203709340")

console.log(video.data[0].name)            // "Karma Police"
console.log(video.data[0].artistName)      // "Radiohead"
console.log(video.data[0].has4K)           // false
console.log(video.data[0].hasHDR)          // false
console.log(video.data[0].durationInMillis)
```

## Get by ISRC

```ts
const video = await musicKit.musicVideos.getByISRC("us", "USRW30400010")
```

---
title: Albums
description: Albums resource methods
---

Access albums via `musicKit.albums`.

## Get by ID

```ts
const album = await musicKit.albums.get("us", "203709340")

console.log(album.data[0].name)          // "OK Computer"
console.log(album.data[0].artistName)    // "Radiohead"
console.log(album.data[0].trackCount)    // 12
console.log(album.data[0].releaseDate)   // "1997-05-21"
console.log(album.data[0].isSingle)      // false
console.log(album.data[0].isCompilation) // false
```

## Get by UPC

```ts
const album = await musicKit.albums.getByUPC("us", "724384459223")
```

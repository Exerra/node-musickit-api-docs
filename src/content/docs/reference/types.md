---
title: Type Reference
description: TypeScript type definitions
---

## MusicKitProps

```ts
type MusicKitProps = {
  key: {
    id: string     // Apple Music Key ID
    teamId: string // Apple Developer Team ID
    p8: string     // Contents of the .p8 private key file
  }
}
```

## MusicKitResultWrapper

```ts
type MusicKitResultWrapper<T> = {
  status: number
  data: T
  error: string | null
}
```

## SearchParams

```ts
type SearchParams = {
  term: string
  types: SearchType[]
  l?: string
  limit?: 1 | 2 | ... | 25
  offset?: number
  with?: string[]
}
```

## SearchType

```ts
type SearchType =
  | "activities" | "albums" | "apple-curators"
  | "artists" | "curators" | "music-videos"
  | "playlists" | "record-labels" | "songs"
  | "stations"
```

## SearchResult

```ts
interface SearchResult {
  nextOffset: number | null
  results: Partial<Record<SearchType, any[]>>
}
```

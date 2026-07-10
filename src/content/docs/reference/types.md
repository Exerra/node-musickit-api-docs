---
title: Type Reference
description: All exported TypeScript types
---

## MusicKitProps

```ts
type MusicKitProps = {
  key: {
    id: string     // Apple Music Key ID
    teamId: string // Apple Developer Team ID
    p8: string     // Contents of the .p8 private key file (including headers)
  }
}
```

## MusicKitResultWrapper

```ts
type MusicKitResultWrapper<T> = {
  status: number       // HTTP status code
  data: T              // Response payload
  error: string | null // Error message, or null on success
}
```

Every method returns this wrapper.

## SearchParams

```ts
type SearchParams = {
  term: string               // Search query
  types: SearchType[]        // Resource types to search
  l?: string                 // Language tag (e.g. "en-us")
  limit?: 1 | 2 | ... | 25  // Results per type (max 25)
  offset?: number            // Pagination offset
  with?: string[]            // Additional resources to include
}
```

## SearchType

```ts
type SearchType =
  | "activities"
  | "albums"
  | "apple-curators"
  | "artists"
  | "curators"
  | "music-videos"
  | "playlists"
  | "record-labels"
  | "songs"
  | "stations"
```

## SearchResult / SearchResultRaw

```ts
interface SearchResult {
  nextOffset: number | null
  results: Partial<Record<SearchType, any[]>>
}
```

Raw results nest data under `results[type].data[]` instead of `results[type][]`.

## Song

```ts
type Song = {
  id: string
  albumName: string
  artistName: string
  artwork: Artwork
  composerName: string
  discNumber: number
  durationInMillis: number
  genreNames: string[]
  hasLyrics: boolean
  isAppleDigitalMaster: boolean
  isrc: string
  name: string
  playParams: PlayParams
  previews: Preview[]
  releaseDate: string
  trackNumber: number
  url: string
  relationships: SongRelationships
}
```

## Album

```ts
type Album = {
  id: string
  artistName: string
  artwork: Artwork
  copyright: string
  editorialNotes: EditorialNotes
  genreNames: string[]
  isCompilation: boolean
  isComplete: boolean
  isMasteredForItunes: boolean
  isSingle: boolean
  name: string
  playParams: PlayParams
  recordLabel: string
  releaseDate: string
  trackCount: number
  upc: string
  url: string
  relationships: AlbumRelationships
}
```

## Artist

```ts
type Artist = {
  id: string
  artwork: Artwork
  editorialNotes: EditorialNotes
  genreNames: string[]
  name: string
  url: string
  relationships: ArtistRelationships
}
```

## MusicVideo

```ts
type MusicVideo = {
  id: string
  artistName: string
  artwork: Artwork
  durationInMillis: number
  genreNames: string[]
  has4K: boolean
  hasHDR: boolean
  isrc: string
  name: string
  playParams: PlayParams
  previews: Preview[]
  releaseDate: string
  url: string
  relationships: MusicVideoRelationships
}
```

## Storefront / StorefrontRaw

```ts
type Storefront = {
  id: string
  explicitContentPolicy: string   // "allowed" | "denied" | "opt-in"
  name: string                    // e.g. "United States"
  defaultLanguageTag: string      // e.g. "en-US"
  supportedLanguageTags: string[] // e.g. ["en-US", "es-MX"]
}

// Raw response preserves the nested attributes structure
interface StorefrontRaw {
  id: string
  type: string
  href: string
  attributes: {
    explicitContentPolicy: string
    name: string
    defaultLanguageTag: string
    supportedLanguageTags: string[]
  }
}
```

The `getAll()` and `get()` methods on `StorefrontsResource` also accept optional props:

```ts
type GetStorefrontsProps = {
  l?: string       // language tag
  include?: string[]  // additional resources to include
  extend?: string[]   // additional fields to extend
}

type GetAllStorefrontsProps = GetStorefrontsProps & {
  limit?: number   // results per page
  offset?: number  // pagination offset
}
```

## Relationship Types

Relationships link resources together. Parsed responses simplify them to arrays; raw responses preserve the full structure.

```ts
interface Datum {
  id: string
  type: string   // e.g. "songs", "albums", "artists"
  href: string
}

// Parsed: array of datums
type GenericRelationship = Datum[]

// Raw: object with href and nested data array
type GenericRelationshipRaw = {
  href: string
  data: Datum[]
}
```

Albums have a special `tracks` relationship where each track includes its full attributes inline:

```ts
// Parsed
type TrackRelationship = SongRaw[]

// Raw
type TrackRelationshipRaw = {
  href: string
  data: SongRaw[]
}
```

### Per-Resource Relationship Maps

```ts
type SongRelationships = Partial<Record<"albums" | "artists", GenericRelationship>>

type AlbumRelationships = {
  artists: GenericRelationship
  tracks: TrackRelationship
}

type ArtistRelationships = {
  albums: GenericRelationship
}

type MusicVideoRelationships = Partial<Record<"albums" | "artists", GenericRelationship>>
```

## Shared Types

```ts
interface Artwork {
  bgColor: string
  height: number
  textColor1: string
  textColor2: string
  textColor3: string
  textColor4: string
  url: string   // contains {w} and {h} placeholders
  width: number
}

interface EditorialNotes {
  name?: string
  short: string
  standard: string
  tagline: string
}

interface Preview {
  url: string
}

interface PlayParams {
  id: string
  kind: string
}
```

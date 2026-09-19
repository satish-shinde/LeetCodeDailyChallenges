# Art bible: Life of a Bug

The visual rules every scene follows.
Where this file and a scene brief disagree on a colour, weight or rule, this file wins.
Where this file and `docs/storyboard.md` disagree on a position or a time, the storyboard wins.

## 1. Frame

Canvas: 1080 x 1920 at 24 fps.
Must-read content stays in safe area x 60..940, y 220..1540.

## 2. Palettes

### 2.1 Warm illustrated palette (paper plate)

| Name | Hex | Use |
|---|---|---|
| paper | #F2E6D2 | Paper base |
| paperShade | #E3D2B7 | Paper shading |
| paperDeep | #CDB596 | Deep paper tone |
| stripeCream | #F6EBD8 | Stripe band A |
| stripeApricot | #F3D7BC | Stripe band B (egg/pupa/eclosion) |
| stripeSage | #D9E3CB | Stripe band B (larva/adult flight) |
| stripeSunrise | #F5D1B8 | Stripe band B (ending sunrise) |
| ink | #2A1C13 | Main ink outline |
| inkSoft | #5A4334 | Secondary line |
| inkFaint | #8D7763 | Construction lines |
| white | #FBF7EE | Highlights |
| sun | #F2C05B | Sunrise disc |

### 2.2 Subject palette, warm

| Name | Hex | Use |
|---|---|---|
| eggShell | #EEDFC2 | Egg capsule body |
| eggRidge | #C8B08A | Egg rib lines |
| larvaBody | #E6D5B2 | Larval base body |
| larvaBand | #A47952 | Larval segment stripes |
| larvaGut | #C99363 | Internal gut tone hints |
| pupaJade | #86B88E | Pupal case main |
| pupaDeep | #5F8F70 | Pupal shadow/hatching |
| pupaSeal | #4A3A2F | Cremaster and top seal |
| flyThorax | #7F6A55 | Adult thorax |
| flyAbdomen | #B7966A | Adult abdomen base |
| flyStripe | #6D4A2D | Adult abdomen stripes |
| flyEye | #C83A34 | Red compound eye |
| flyWing | #F4F7F9 | Wing membrane |
| flyIri | #8BB9C6 | Iridescent wing sheen lines |
| flyLeg | #3A2B1F | Leg/antenna line |
| matingGlow | #E79AAE | Mating cue accent |

### 2.3 Cool schematic palette (blueprint plate)

| Name | Hex | Use |
|---|---|---|
| navy | #0B1230 | Blueprint base |
| navyDeep | #060A1C | Deep blueprint |
| navyLight | #18234D | Panel fill |
| grid | #3A4A86 | Grid |
| lavender | #C8C1EF | Main linework |
| lineWhite | #EEF0FF | Emphasis lines |
| paleBlue | #9CC2EA | Secondary structure |
| glow | #FFF3DC | Glow cores |
| magenta | #FF3D98 | Change flashes |
| schemGene | #7FE39D | Gene-expression stripes |
| schemFly | #F2A66A | Fly identity tint |

### 2.4 Overlay colours on illustrations

| Name | Hex | Use |
|---|---|---|
| annMagenta | #E43D8C | Change rings |
| annBlue | #3B8EE0 | Trajectory lines |
| annYellow | #EAB530 | Attention/brackets |

## 3. Line

Illustrated outlines: 5 px `ink`; secondary: 3 px; details: 1.8 px.
Schematic primary double-line: 2.5 px + 1.5 px in `lavender`.
All lines run through boil jitter (`lib.boil`) and `lib.inkPath` wobble.

## 4. Tone

Hatching controls value in illustrated mode (no gradients).
Stipple radius 1.0..2.2 px for tissue/hair texture.
Blueprint allows glow halos only around active dots.

## 5. Schematic language

Every schematic starts with navy blueprint base + hex lattice + guide circles + dendrogram branch lines.
Every schematic includes green gene-expression stripes and glowing stipple nuclei.
No explanatory text inside schematic shots.
Progress glyph at (900, 300): six-segment ring (egg, larva, pupa, eclosion, flight, mating).

## 6. Overlays on illustrations

Each illustrated shot has at least one overlay (ring, arc, ruler, bracket, trajectory).
Overlays are full-opacity and never hatched.

## 7. Motion

Characters animate on twos (`lib.onTwos`), camera and overlays at 24 fps.
Beat alignment is strict to storyboard timestamps.

## 8. Match cuts

Shared-geometry tables in storyboard are binding.
Across cuts, shape pixels stay fixed; only style plate changes.
Ink-splat transitions appear at every act handoff.

## 9. Wordmark

Closing wordmark: `life of a bug`, lowercase, 44 px thin sans, centered x=540 baseline y=1470 in safe area.

## 10. Subject reference

Sources checked on 19 Sep 2026: `.tmp/research/01-drosophila-development-ncbi.md`, `.tmp/research/02-britannica-fruit-fly.md`, `.tmp/research/03-ufl-drosophila-profile.md`.

### 10.1 Egg capsule

- Draw as elongated oval with micropylar cap at top.
- Ratio: height:width = 1.7:1 (hero macro), with 10-14 faint longitudinal ribs.
- Pose: attached to fruit skin underside, slight 12° tilt.
- Sequence: single egg first, then split cap at hatch match cut.

### 10.2 Larva segments

- Legless tapered larva with 11 visible body segments + head end.
- Width ratio from head to posterior roughly 1:1.5 then taper.
- Segment bands alternate light/dark stripes for readability.
- Motion: peristaltic compression wave traveling head→tail on twos.

### 10.3 Pupa case

- Puparium as rounded capsule, broader mid-body, narrowed ends.
- Ratio: length:width = 2.2:1.
- Early pupa pale tan-jade; late pupa darkens and shows inner fly silhouette.
- Orientation: attached at anterior end to substrate.

### 10.4 Adult fly

- Small fly with red compound eyes, short antennae, striped abdomen.
- Thorax compact oval; abdomen 1.4× thorax length.
- Wings translucent with iridescent contour hatching and visible veins.
- Eclosion sequence: body emerges, wings crumpled, then expand before first sustained flight.

### 10.5 Hex lattice

- Blueprint tissue panel uses 16 px hex cells clipped to phase silhouette.
- Cells are line-only (no solid fills), with random missing edges below 8% for hand-drawn feel.
- Lattice aligns with shared geometry anchors to support match cuts.

### 10.6 Ink splat

- Transition splat is 7-11 lobed radial blot with 3-6 satellite droplets.
- Main blot radius 120..340 px, alpha decays over 6-10 frames.
- Splat center lands on shared geometry focal point for each phase handoff.

### 10.7 Mistakes to avoid

- Wrong: butterfly-like giant wings at eclosion. Correct: compact fly wings that expand from crumpled folds.
- Wrong: smooth maggot body with no segmentation cues. Correct: explicit segment rings and peristaltic body compression.
- Wrong: pupa hanging by tail like a chrysalis. Correct: fruit-fly-like puparium attached anteriorly to substrate.
- Wrong: opaque colored wings. Correct: mostly translucent wings with subtle iridescent line accents.
- Wrong: random blueprint effects with no biological signal. Correct: include hex lattice, dendrogram, and green gene-expression stripes each schematic shot.

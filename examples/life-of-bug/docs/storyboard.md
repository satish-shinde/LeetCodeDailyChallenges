# Storyboard: Life of a Bug

## Logline

A fruit-fly-like insect passes through egg, larva, pupa, eclosion, and adult flight to mating, then the cycle resolves into sunrise through a window.
Warm hand-drawn paper plates and dark blueprint interludes alternate on a 120 bpm beat grid, with match cuts locked by shared geometry.

## Numbers

- BPM: 120 (beat = 0.5 s = 12 frames, bar = 2.0 s).
- Duration: 30.0 s = 15 bars of 4/4 = 720 frames at 24 fps.
- Frame: 1080 x 1920 vertical.
- Shots: 13, each 1.0 to 2.5 s, all boundaries on beat grid.

## Summary

| Order | Id | Start | End | Mode | Title |
|---|---|---|---|---|---|
| 01 | egg-hero | 0.0 | 2.5 | illustrated | Egg on peach paper |
| 02 | egg-blueprint | 2.5 | 5.0 | schematic | Cellular egg map |
| 03 | larva-hatch | 5.0 | 7.5 | illustrated | Hatch and first crawl |
| 04 | larva-blueprint | 7.5 | 10.0 | schematic | Segment growth program |
| 05 | pupa-form | 10.0 | 12.0 | illustrated | Puparium hardening |
| 06 | pupa-blueprint | 12.0 | 14.0 | schematic | Tissue remodelling graph |
| 07 | eclosion-open | 14.0 | 16.0 | illustrated | Adult emerges |
| 08 | eclosion-blueprint | 16.0 | 18.0 | schematic | Wing expansion routing |
| 09 | adult-first-flight | 18.0 | 20.5 | illustrated | First controlled flight |
| 10 | flight-blueprint | 20.5 | 23.0 | schematic | Neural flight network |
| 11 | mating-courtship | 23.0 | 25.5 | illustrated | Wing-song courtship |
| 12 | mating-blueprint | 25.5 | 28.0 | schematic | Fertility cascade |
| 13 | sunrise-window | 28.0 | 30.0 | illustrated | Warm window sunrise loop |

## Structure

- Act 1 Egg, bars 1..3 (0..5 s): shots 01-02.
- Act 2 Larva, bars 3..5 (5..10 s): shots 03-04.
- Act 3 Pupa, bars 6..7 (10..14 s): shots 05-06.
- Act 4 Eclosion, bars 8..9 (14..18 s): shots 07-08.
- Act 5 Adult flight, bars 10..11.5 (18..23 s): shots 09-10.
- Act 6 Mating + dawn resolution, bars 12..15 (23..30 s): shots 11-13.

Match cuts by shared geometry: 01→02 (egg), 02→03 (egg crack), 03→04 (larva spline), 05→06→07 (puparium shell), 07→08→09 (adult body axis), 11→12→13 (abdomen + window disc).

Time devices: blueprint dendrogram growth counters, rotating progress glyph in schematic shots, and sunrise disc in final illustrated shot.

## Conventions

- `T` global seconds, `t` shot-local seconds.
- Boundary times are global and locked to beat grid.
- Camera uses `lib.camera(ctx, { x, y, zoom, rot }, fn)`.
- Palette keys must exist in `src/lib.js`.
- Ink-splat transitions are drawn by incoming shot in first 6-10 frames.

## Shared geometry

### G1: Egg capsule profile (01, 02, 03)

Axis x=540. Top cap y=500, bottom y=1210.
Half-widths: y500:120, y620:168, y760:182, y900:172, y1030:130, y1140:70, y1210:0.
Micropylar cap center (540, 500), r=44.

### G2: Larva spline (03, 04, 05)

Polyline through (300,1120) (420,1020) (560,970) (700,1040) (780,1180).
Segment ring normals sampled every 38 px arc length.

### G3: Puparium shell (05, 06, 07)

Capsule centerline x=540, y560..1340.
Half-widths: y560:86, y700:140, y880:164, y1040:150, y1200:112, y1340:20.
Attachment node at (540,540).

### G4: Adult body axis (07, 08, 09, 10, 11)

Head center (520,860), thorax center (540,940), abdomen tip (650,1150).
Wing root left (545,955), wing root right (585,965), max wing arc to (860,760) and (930,1030).

### G5: Window sunrise disc (12, 13)

Window center (540,900), pane rect x170..910 y350..1450.
Sun disc center starts (520,1090) and ends (540,760), r=130.

---

## 01 egg-hero: Egg on peach paper

T 0.0 to 2.5, illustrated, film start.

### Composition
Cream/peach stripes with macro egg on G1; fruit skin arc at top.

### Forms
Egg capsule in `eggShell` with `eggRidge` ribs and `ink` outline.

### Overlays
Yellow focus ring on cap; blue size bracket at right.

### Motion
T 0.5 ring pop; T 1.0 subtle rotation 4°; T 2.0 pre-cut ink droplets appear.

### Camera
Slow push-in 1.00→1.08.

### Enter and exit
Starts fully drawn; exits by centered ink splat matching G1 axis.

### Subject
Single attached egg before hatch.

### Sound
T 0.0 warm marimba downbeat.
T 0.5 soft ink pop.
T 2.0 brushy splat swell.

---

## 02 egg-blueprint: Cellular egg map

T 2.5 to 5.0, schematic, hard cut + incoming splat fade.

### Composition
Navy blueprint with G1 egg, hex lattice inside, dendrogram right side.

### Forms
Lavender egg contour, green gene stripes along axis, glow dots migrating cap→midbody.

### Overlays
Bracket ticks and progress glyph egg segment lit.

### Motion
T 3.0 nuclei split 1→2; T 3.5 to 4.5 glow dots multiply; T 4.5 magenta hatch signal.

### Camera
Static.

### Enter and exit
Inherits G1 silhouette exactly; exits with crack line placed on G1 lower third.

### Subject
Embryonic organization before hatch.

### Sound
T 2.5 glass ping.
T 3.0 binary pulse click.
T 4.5 magenta zzzap cue.

---

## 03 larva-hatch: Hatch and first crawl

T 5.0 to 7.5, illustrated, hard cut.

### Composition
Egg from G1 now split; larva on G2 curve over paper stripe sage.

### Forms
Legless segmented larva with alternating `larvaBody`/`larvaBand`; dark head hook.

### Overlays
Blue trajectory line following G2; yellow scale bar.

### Motion
T 5.0 shell cracks; T 5.5 larva exits; T 6.0 and 6.5 peristaltic pushes; T 7.0 tail clears shell.

### Camera
Pull back 1.08→0.95 to reveal full body.

### Enter and exit
Egg matches prior geometry; exits with larva silhouette held for blueprint.

### Subject
Newly hatched larva begins feeding crawl.

### Sound
T 5.0 woody crack.
T 5.5 wet scrape.
T 6.5 chew ticks.

---

## 04 larva-blueprint: Segment growth program

T 7.5 to 10.0, schematic, hard cut.

### Composition
Larva path on G2 with side panel dendrogram and hex tissue fields.

### Forms
Double-line larva contour, green stripes by segment, glowing dots moving head→tail.

### Overlays
Progress glyph lights larva segment; bracket counts 3 instar steps.

### Motion
T 8.0 segment rings pulse sequentially; T 9.0 dendrogram branch extends; T 9.5 prepupal node flashes magenta.

### Camera
Static with slight 6% pan right at end.

### Enter and exit
Matches G2 centerline; exits by darkening to puparium anchor point.

### Subject
Larval growth and internal reprogramming.

### Sound
T 7.5 glass tick grid.
T 8.5 rhythmic clicks on 8ths.
T 9.5 low transition swell.

---

## 05 pupa-form: Puparium hardening

T 10.0 to 12.0, illustrated, hard cut.

### Composition
Larva contracts at top attachment and forms G3 capsule.

### Forms
Early pupa in `pupaJade` with `pupaDeep` hatching and dark seal node.

### Overlays
Magenta contraction ring and yellow attachment bracket.

### Motion
T 10.5 body shortens; T 11.0 skin hardens color shift; T 11.5 shell fully formed.

### Camera
Static centered on G3.

### Enter and exit
Larva path converges into G3 shell; exits with shell silhouette fixed.

### Subject
Puparium formation from larval cuticle.

### Sound
T 10.0 thump.
T 10.5 crinkle roll.
T 11.5 metallic settle click.

---

## 06 pupa-blueprint: Tissue remodelling graph

T 12.0 to 14.0, schematic, hard cut.

### Composition
G3 shell as transparent blueprint with dendrogram web and gene stripes.

### Forms
Hex lattice blocks partitioned by future head/thorax/abdomen zones.

### Overlays
Progress glyph lights pupa segment; arc annotation links zones.

### Motion
T 12.5 old tissue dots dissolve; T 13.0 new clusters glow; T 13.5 wing/eye nodes brighten.

### Camera
Slow push 1.00→1.05.

### Enter and exit
Shell outline fixed for next cut; exits with anterior seam highlight.

### Subject
Internal remodeling rather than simple melt.

### Sound
T 12.0 filtered pad bloom.
T 13.0 sparkling reconstruction tings.
T 13.5 cue bell for eclosion prep.

---

## 07 eclosion-open: Adult emerges

T 14.0 to 16.0, illustrated, transition in flash 0.125.

### Composition
G3 shell opens; adult on G4 axis partly outside case.

### Forms
Red eyes, striped abdomen, crumpled translucent wings.

### Overlays
Blue pulses through wing veins; yellow ring at split seam.

### Motion
T 14.0 flash reveal; T 14.5 thorax out; T 15.0 abdomen slides free; T 15.5 wings inflate.

### Camera
Push-in to body 1.03.

### Enter and exit
Uses exact shell and body anchors for next two shots.

### Subject
Adult eclosion and immediate wing expansion.

### Sound
T 14.0 impact + bright chord.
T 14.5 shell creak.
T 15.5 wet inflation pulse.

---

## 08 eclosion-blueprint: Wing expansion routing

T 16.0 to 18.0, schematic, hard cut.

### Composition
G4 body as line map; wings shown as vein network with hex subpanels.

### Forms
Green stripes along vein trunks and dendrogram to distal tips.

### Overlays
Progress glyph lights eclosion segment; reticle tracks wing tip.

### Motion
T 16.5 flow dots surge; T 17.0 second surge; T 17.5 network stabilizes.

### Camera
Static.

### Enter and exit
Body axis remains fixed; exits with wings fully extended for first flight.

### Subject
Hemolymph routing and stabilization of expanded wing.

### Sound
T 16.0 glass cue.
T 16.5 pulse blip.
T 17.5 release shimmer.

---

## 09 adult-first-flight: First controlled flight

T 18.0 to 20.5, illustrated, hard cut.

### Composition
Adult fly from side lifts from branch toward center against warm stripes.

### Forms
Red eyes, striped abdomen, iridescent translucent wings with ink hatching.

### Overlays
Blue arc trajectory and yellow speed ticks.

### Motion
T 18.5 takeoff; T 19.0 wingbeat cycle begins; T 20.0 hover turn.

### Camera
Follow pan left→center, zoom 1.0→1.1.

### Enter and exit
Begins from G4 posture; exits in profile for neural blueprint.

### Subject
Post-eclosion powered flight.

### Sound
T 18.0 pluck restart.
T 18.5 wing buzz onset.
T 20.0 hover accent.

---

## 10 flight-blueprint: Neural flight network

T 20.5 to 23.0, schematic, hard cut.

### Composition
Profile fly blueprint with thoracic ganglia dendrogram and wing control loops.

### Forms
Hex control fields, glow nodes at wing root, green stripes on active pathways.

### Overlays
Progress glyph lights flight segment.

### Motion
T 21.0 left wing node fires; T 21.5 right node fires; T 22.5 synchronized loop closes.

### Camera
Static with tiny 4% zoom in final beat.

### Enter and exit
Keeps adult profile silhouette for courtship cut.

### Subject
Central pattern generation for sustained flight.

### Sound
T 20.5 synth ping.
T 21.5 alternating pulses.
T 22.5 sync hit.

---

## 11 mating-courtship: Wing-song courtship

T 23.0 to 25.5, illustrated, hard cut.

### Composition
Two adults on window ledge; male circles female in foreground.

### Forms
Distinct red eyes, striped abdomens, shimmering wings; playful posture.

### Overlays
Magenta courtship ring and blue circular path.

### Motion
T 23.5 male wing-song vibration; T 24.5 female turns; T 25.0 pairing contact.

### Camera
Gentle orbit using camera rot ±3°.

### Enter and exit
Profile from prior shot becomes pair; exits with aligned abdomen axis for blueprint.

### Subject
Adult courtship and mating behavior.

### Sound
T 23.0 warm chord.
T 23.5 tremolo wing tone.
T 25.0 soft resolve hit.

---

## 12 mating-blueprint: Fertility cascade

T 25.5 to 28.0, schematic, hard cut.

### Composition
Dual-body schematic merges into one fertility network around G5 window disc center.

### Forms
Dendrogram branches from paired nodes; gene stripes pulse toward oviposition node.

### Overlays
Progress glyph lights mating segment and completes full ring at T 27.5.

### Motion
T 26.0 paired nodes connect; T 27.0 pulses converge; T 27.5 full-ring flash then dim.

### Camera
Static.

### Enter and exit
Network collapses into circular sun node shared with shot 13.

### Subject
Post-mating fertility cascade leading to next egg cycle.

### Sound
T 25.5 glass merge tone.
T 27.0 rising pulse train.
T 27.5 release into dawn swell.

---

## 13 sunrise-window: Warm window sunrise loop

T 28.0 to 30.0, illustrated, hard cut.

### Composition
Indoor window frame (G5), sunrise beams, mated pair resting silhouette.

### Forms
Sun disc warm `sun`; window muntins in `inkSoft`; flies minimal silhouette with red-eye glints.

### Overlays
Final yellow ring around sun and subtle blue dawn arc.

### Motion
T 28.5 sun rises; T 29.0 room warms; T 29.5 ring settles to loop frame.

### Camera
Slow pull-back 1.03→1.00.

### Enter and exit
Sun disc aligns to blueprint node from shot 12 and final frame composes to replay shot 01 center.

### Subject
Warm dawn closure implying the cycle continues.

### Sound
T 28.0 airy pad opens.
T 29.0 gentle bell.
T 29.5 soft pickup leading to loop downbeat.

---

## Appendix: from doc to code — `src/timeline.js`

Timeline mirrors this shot table exactly; one flat cue list from all Sound sections.

# Build contract

The one source of truth for how the film's code fits together.
Every agent that touches this project follows it.

## Goal

A film of the life of a fruit-fly-like holometabolous insect (egg to larva to pupa to adult eclosion to adult flight and mating), drawn entirely by JavaScript on a canvas, with music and sound effects synthesised in JavaScript.
It ships as one self-contained HTML file and as a rendered MP4 for YouTube Shorts.
The look and editing follow `docs/art-bible.md`.

## Hard rules

1. **No media.** The shipped HTML contains no images, video, audio files, fonts files, base64, `data:` URLs, `<img>`, `new Image`, `fetch`, `XMLHttpRequest`, or CSS `url(...)`. Every pixel and every sample is computed.
2. **Deterministic.** `FILM.renderFrame(T)` draws the same pixels every time for the same `T`, in any order. No `Math.random`, no `Date`, no `performance.now` inside drawing or audio code. Randomness comes from `FILM.lib.rng(seed)`.
3. **Stateless per frame.** A scene's `draw` may not depend on a previous frame having been drawn. Caches are allowed only if they are pure functions of their inputs.
4. **Canvas** is 1080 wide by 1920 tall. Output is 24 fps.
5. **Plain browser JavaScript**, no build framework, no npm packages in the shipped file. Node is used only for tools.
6. **File ownership.** A scene agent edits only its own `src/scenes/<file>.js`.

## Files

| Path | Owner | Purpose |
|---|---|---|
| `src/core.js` | foundation | Defines `window.FILM`, the scene registry, `renderFrame`, global post-processing. |
| `src/lib.js` | foundation | Shared deterministic drawing library and palette. |
| `src/timeline.js` | storyboard | `FILM.TIMELINE` shots and cues. |
| `src/scenes/NN-<id>.js` | scene owner | Registers one shot with `FILM.scene({...})`. |
| `src/music.js` | music | Schedules score and effects. |
| `src/player.js` | foundation | Interactive player behaviour. |
| `tools/*` | foundation | Build/render/snap/check toolchain. |
| `docs/storyboard.md`, `docs/art-bible.md` | storyboard | Human-readable plan and visual rules. |

(function () {
  'use strict';
  const ID = 'egg-blueprint';
  function glyph(L, ctx, stage) {
    const cx = 900, cy = 300, r = 64, seg = 6;
    for (let i = 0; i < seg; i++) L.arcAnnotation(ctx, { cx, cy, r, a0: -Math.PI / 2 + (i * Math.PI * 2) / seg, a1: -Math.PI / 2 + ((i + 0.85) * Math.PI * 2) / seg, color: i <= stage ? L.pal.schemGene : L.pal.lavender, alpha: i <= stage ? 0.95 : 0.35, width: 3 });
  }
  FILM.scene({ id: ID, draw(ctx, tIn, info) {
    const L = info.lib, P = L.pal, t = L.clamp(tIn, 0, info.dur), bi = L.boil(info.T), seed = L.hash(ID);
    L.blueprint(ctx, { deep: true });
    const eggPath = () => { ctx.moveTo(540,500); ctx.bezierCurveTo(708,760,670,980,540,1210); ctx.bezierCurveTo(410,980,372,760,540,500); ctx.closePath(); };
    L.hexLattice(ctx, eggPath, { cell: 16, color: P.lavender, alpha: 0.35, seed: seed + bi });
    for (let i = -8; i <= 8; i++) L.inkLine(ctx, 410 + i * 18, 620, 690 + i * 18, 1100, { color: P.schemGene, width: 1.3, alpha: 0.6, seed: seed + i + 30 + bi });
    L.inkPath(ctx, [[540,500],[708,760],[670,980],[540,1210],[410,980],[372,760]], { closed: true, color: P.lavender, width: 2.8, seed: seed + 50 + bi, double: true });
    const n = 1 + Math.floor(L.clamp((t - 0.5) / 1.6) * 7);
    for (let i = 0; i < n; i++) L.glowDot(ctx, 540 + Math.cos(i * 2.1) * (20 + i * 25), 540 + i * 70, 7, { core: P.glow, halo: P.magenta, alpha: 0.9 });
    L.inkLine(ctx, 780, 580, 920, 720, { color: P.lavender, width: 1.5, seed: seed + 70 + bi });
    L.inkLine(ctx, 920, 720, 860, 880, { color: P.lavender, width: 1.5, seed: seed + 71 + bi });
    L.inkLine(ctx, 920, 720, 980, 880, { color: P.lavender, width: 1.5, seed: seed + 72 + bi });
    glyph(L, ctx, 0);
  }});
})();

(function () {
  'use strict';
  const ID = 'egg-hero';
  FILM.scene({
    id: ID,
    draw(ctx, tIn, info) {
      const L = info.lib, P = L.pal;
      const t = L.clamp(tIn, 0, info.dur), p = t / info.dur;
      const seed = L.hash(ID), bi = L.boil(info.T);
      L.stripes(ctx, { a: P.stripeCream, b: P.stripeApricot, width: 140, angle: -0.52, drift: info.T * 6 });
      const egg = [[540,500],[708,760],[670,980],[540,1210],[410,980],[372,760]];
      L.inkPath(ctx, egg, { closed: true, fill: P.eggShell, width: 5, color: P.ink, seed: seed + bi });
      for (let i = -5; i <= 5; i++) L.inkLine(ctx, 540 + i * 20, 520, 540 + i * 8, 1180, { color: P.eggRidge, width: 1.6, alpha: 0.8, seed: seed + 20 + i + bi });
      L.inkCircle(ctx, 540, 500, 44, { color: P.eggRidge, width: 2.4, seed: seed + 40 + bi });
      L.inkCircle(ctx, 540, 500, 70 + 400 * L.ease.outExpo(L.clamp((t - 0.5) / 0.8)), { color: P.annYellow, width: 3, alpha: t > 0.5 ? (1 - L.clamp((t - 0.5) / 1.4)) : 0, seed: seed + 50 + bi });
      L.bracket(ctx, { x1: 880, y1: 520, x2: 880, y2: 1210, color: P.annBlue, alpha: 0.8, ticks: 8 });
      const splat = L.clamp((t - 2.0) / 0.5);
      if (splat > 0) {
        for (let i = 0; i < 9; i++) {
          const a = (i / 9) * Math.PI * 2;
          L.inkCircle(ctx, 540 + Math.cos(a) * 220, 860 + Math.sin(a) * 220, 40 + 110 * splat, { fill: P.ink, alpha: 0.16 * splat, color: P.ink, width: 1.5, seed: seed + 100 + i + bi });
        }
      }
    },
  });
})();

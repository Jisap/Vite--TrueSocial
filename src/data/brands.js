const base = [1, 2, 3, 4, 5].map((n) => ({
  src: `/assets/images/brand/brand-1-${n}.png`,
  alt: `Partner brand logo ${n}`,
}));

// Duplicate so Swiper loop has more slides than slidesPerView (max = 5)
export const brandLogos = [...base, ...base].map((b, i) => ({
  ...b,
  id: `brand-${i + 1}`,
}));

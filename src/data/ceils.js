import ceiling1 from 'assets/images/room/ceilings/farbovana.webp';
import ceiling2 from 'assets/images/room/ceilings/gkl.webp';
// import ceiling3 from 'assets/images/room/ceilings/natyazhna.webp';
import toiletCeiling1 from 'assets/images/toilet/pofarbovana.webp';
// import toiletCeiling2 from 'assets/images/toilet/gipsokarton.webp';
import kitchenCeiling1 from 'assets/images/kitchen/ceilings/farbovana.webp';
import kitchenCeiling2 from 'assets/images/kitchen/ceilings/gipsokarton.webp';
// import kitchenCeiling3 from 'assets/images/kitchen/ceilings/natyazhna.webp';

export const ceilings = [
  { label: 'Пофарбована', img: ceiling1, variant: 1 },
  { label: 'Стеля з гiпсокартону', img: ceiling2, variant: 2 },
  // { label: 'Натяжна стеля', img: ceiling3, variant: 3 },
];

export const toiletCeilings = [
  {
    label: 'Пофарбована',
    img: toiletCeiling1,
    variant: 1,
  },
  { label: 'Пiд плитку', img: toiletCeiling1, variant: 2 },
];

export const kitchenCeilings = [
  {
    label: 'Пофарбована',
    img: kitchenCeiling1,
    variant: 1,
  },
  { label: 'Стеля з гiпсокартону', img: kitchenCeiling2, variant: 2 },
  // { label: 'Натяжна стеля', img: kitchenCeiling3, variant: 3 },
];

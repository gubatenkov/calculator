import React from 'react';

export const ParamsPage = React.lazy(() => import('components/pages/params-page'));
export const RoomPage = React.lazy(() => import('components/pages/room-page'));
export const ToiletPage = React.lazy(() => import('components/pages/toilet-page'));
export const KitchenPage = React.lazy(() => import('components/pages/kitchen-page'));
export const ResultPage = React.lazy(() => import('components/pages/result-page'));

export { default as App } from 'components/app';
export { default as RoomsForm } from 'components/forms/rooms-form';
export { default as ParamsForm } from 'components/forms/params-form';
export { default as ResultForm } from 'components/forms/result-form';
export { default as FormItemDropdown } from 'components/forms/params-form/FormItemDropdown';
export { default as FormItemInput } from 'components/forms/params-form/FormItemInput';
export { default as ImageCard } from 'components/image-card';
export { default as Ceilings } from 'components/pages/room-page/ceilings';
export { default as Walls } from 'components/pages/room-page/walls';
export { default as Floors } from 'components/pages/room-page/floors';
export { default as SelectDropdown } from 'components/pages/room-page/select-dropdown';
export { default as TotalsCard } from 'components/totals-card';
export { default as Sidebar } from 'components/sidebar';
export { default as Loading } from 'components/loading';

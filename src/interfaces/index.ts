export interface IRoom {
  id: number;
  area: number;
  isInputError: boolean;
  currentCeiling: number;
  currentWall: number;
  currentFloor: number;
  path: string;
}

export interface IObject {
  name: string;
  items: IRoom[];
  maxItems: number;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IAppState {
  params: {
    currentStep: number;
    region: number;
    city: string;
    objectStatus: number;
    ceilingHeight: number;
  };
  newWalls: boolean;
  rooms: IObject[];
  totalArea: number;
  [x: string]: any;
}

export interface IObjectDataItem {
  label: string;
  img: string | null;
  variant: number;
}

export interface IObjectWallsProps {
  activeItem: number;
  items: IObjectDataItem[];
  setActive: () => void;
}

export interface IImageCardProps {
  img: string;
  text: string;
  subtext: string;
  active: boolean;
  onChange: () => void;
}

export interface IFormItemInputProps {
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  [x: string]: any;
}

export interface FormItemDropdownProps {
  label: string;
  variant: any;
  fullWidth: boolean;
  items: { id: number; name: string }[];
  name: string;
  value: number;
  onChange: (value: number, name: string) => void;
}

export interface FormItemProps {
  registerInput: (name: string, validator: {}) => {};
  validator: object;
  errors: { message?: string };
  [x: string]: any;
}

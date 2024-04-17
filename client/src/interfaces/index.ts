export interface Route {
  name: string;
  component: () => void;
}

export interface Car {
  id: number;
  name: string;
  color: string;
}

export interface CreateCar {
  name: string;
  color: string;
}

export interface CarEngine {
  velocity: number;
  distance: number;
}

export interface CarDriveMode {
  success: boolean;
}

export interface UpdateCar {
  id?: number;
  name: string;
  color: string;
}

export interface Winner {
  id: number;
  time: number;
  wins: number;
}

export interface CarData {
  id: number;
  name: string;
  color: string;
  speed: number;
  wins: number;
  time?: number;
}

export interface WinnerCar extends Car, Winner {}

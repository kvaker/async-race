import { Component } from '../../utils/component';
import { OptionsButtons } from './options-buttons';
import { OptionsInputs } from './options-inputs';
import { Car, CreateCar, UpdateCar } from '../../interfaces/index';

import './index.scss';

export class GarageOptions extends Component {
  startRaceAllCars: () => void = () => {};
  resetAllCars: () => void = () => {};
  generateCars: () => void = () => {};
  createCar: (state: CreateCar) => void = () => {};
  updateCar: (car: UpdateCar) => void = () => {};
  updateInputs: OptionsInputs;
  optionsButtons: OptionsButtons;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage-options']);

    const createInputs = new OptionsInputs(this.element, 'create', [
      'garage-create-inputs',
    ]);
    createInputs.createCar = (state) => this.createCar(state);

    this.updateInputs = new OptionsInputs(this.element, 'update', [
      'garage-update-inputs',
    ]);
    this.updateInputs.createCar = () => {
      this.updateCar(this.updateInputs.state);
    };

    this.optionsButtons = new OptionsButtons(this.element);
    this.optionsButtons.startRaceAllCars = () => this.startRaceAllCars();
    this.optionsButtons.resetAllCars = () => this.resetAllCars();
    this.optionsButtons.generateCars = () => this.generateCars();
  }

  updateState(car: Car): void {
    this.updateInputs.state = car;
    this.updateInputs.updateInputs();
  }
}

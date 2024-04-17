import { Component } from '../../utils/component';
import { UIButton } from '../UI/button/button';

export class OptionsButtons extends Component {
  startRaceAllCars: () => void = () => {};
  resetAllCars: () => void = () => {};
  generateCars: () => void = () => {};
  buttonRace: UIButton;
  buttonReset: UIButton;
  buttonGenerateCars: UIButton;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage-buttons']);

    this.buttonRace = new UIButton(
      this.element,
      ['garage-race-button'],
      'race',
    );
    this.buttonRace.onClickButton = () => this.startRaceAllCars();

    this.buttonReset = new UIButton(
      this.element,
      ['garage-reset-button'],
      'reset',
      true,
    );
    this.buttonReset.onClickButton = () => this.resetAllCars();

    this.buttonGenerateCars = new UIButton(
      this.element,
      ['garage-generate-button'],
      'generate cars',
    );
    this.buttonGenerateCars.onClickButton = () => this.generateCars();
  }
}

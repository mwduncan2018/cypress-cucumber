import { World, setWorldConstructor } from '@badeball/cypress-cucumber-preprocessor/methods';

interface ICustomWorld extends World {
  user?: {
    username: string;
    email: string;
  };
  products?: any[];
}

setWorldConstructor(class CustomWorld extends World implements ICustomWorld {
  constructor({ parameters }) {
    super({ parameters });
    this.user = undefined;
    this.products = [];
  }
});
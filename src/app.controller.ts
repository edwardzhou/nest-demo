import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello World' };
  }

  getHello(): string {
    return this.appService.getHello();
  }

  // here starts the bad-smell codes

  // Global variable referenced by following function.

  // If we had another function that used this name, now it'd be an array and it could break it.
  let name = 'Ryan McDermott';

  function splitIntoFirstAndLastName() {
    name = name.split(' ');
  }

  splitIntoFirstAndLastName();

  console.log(name); // ['Ryan', 'McDermott'];


  function createFile(name, temp) {
    if (temp) {
      fs.create(`./temp/${name}`);
    } else {
      fs.create(name);
    }
  }

  const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);
}

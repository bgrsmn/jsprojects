import {
	BaseLogger,
	MongoLogger,
} from '../crossCuttingConcerns/logging/logger.js';
import User from '../models/user.js';
import UserService from '../services/userService.js';

//Detaylar component demek.(Gerçek hayattaki ekran gibi)
console.log('User component yüklendi');

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, 'Engin', 'Demiroğ', 'Ankara');
let user2 = new User(2, 'Baran', 'Gökçekli', 'Muğla');

userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(2));

userService.getById(1);

let customer = { id: 1, firstName: 'Engin' };

//prototyping(Sonradan değer ekleyebiliriz.)
customer.lastName = 'Demiroğ';

console.log(customer.lastName);

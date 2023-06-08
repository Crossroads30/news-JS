import Loader from './loader';

class AppLoader extends Loader {
   constructor() {
      super('https://newsapi.org/v2/', {
         apiKey: '4d4c1c8ea5944e83badde09e1c9e38ac', // получите свой ключ https://newsapi.org/
      });
   }
}

export default AppLoader;

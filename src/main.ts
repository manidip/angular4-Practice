import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD

=======
>>>>>>> 47d8bc1217c69b16606ac963ca284a626b1a9b76
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

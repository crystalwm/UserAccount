import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//import jquery
import 'jQuery';

platformBrowserDynamic().bootstrapModule(AppModule);
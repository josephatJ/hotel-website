import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturedRoomsComponent } from './home/featured-rooms/featured-rooms.component';
import { FeaturedServicesComponent } from './home/featured-services/featured-services.component';

export const pages: any[] = [HomeComponent, ContactsComponent, RoomsComponent, ServicesComponent, AboutUsComponent, FeaturedRoomsComponent, FeaturedServicesComponent];

export * from './home/home.component';
export * from './contacts/contacts.component';
export * from './rooms/rooms.component';
export * from './services/services.component';
export * from './about-us/about-us.component';
export * from './home/featured-rooms/featured-rooms.component';
export * from './home/featured-services/featured-services.component';

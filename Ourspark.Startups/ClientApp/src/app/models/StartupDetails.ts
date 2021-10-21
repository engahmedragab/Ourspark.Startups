import { Startup } from './Startup';
import { Review } from './Review';
import { Link } from './Link';

export interface StartupDetails {
    startup : Startup;
    startupReviews : Review[];
    startupLinks : Link[];
}

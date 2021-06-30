import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initLoaderInteraction} from './modules/intro-loader';
import {breakpointChecker} from './modules/description';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initLoaderInteraction();
breakpointChecker();

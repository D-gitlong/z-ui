import './scss/main.scss';
import Alert from './components/alert';

const components = {
	Alert
}

const install = function(Vue) {
	if (install.installed) return;
  Object.keys(components).forEach(key => Vue.component(key, components[key]));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}






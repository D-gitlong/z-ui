import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r => require.ensure([], () => r(require('../components/Index.vue')), 'Index')
const GettingStarted = r => require.ensure([], () => r(require('../pages/cn/gettingStarted.md')), 'GettingStarted')
const Changelog = r => require.ensure([], () => r(require('../pages/cn/changelog.md')), 'Changelog')
const Customize = r => require.ensure([], () => r(require('../pages/cn/Customize.md')), 'Customize')
const Components = r => require.ensure([], () => r(require('../components/components.vue')), 'Components')
const Helper = r => require.ensure([], () => r(require('../pages/cn/Helper.md')), 'Helper')
const Layout = r => require.ensure([], () => r(require('../pages/cn/Layout.md')), 'Layout')
const Button = r => require.ensure([], () => r(require('../pages/cn/Button.md')), 'Button')
const Icon = r => require.ensure([], () => r(require('../pages/cn/Icon.md')), 'Icon')
const Transition = r => require.ensure([], () => r(require('../pages/cn/Transition.md')), 'Transition')
const Affix = r => require.ensure([], () => r(require('../pages/cn/Affix.md')), 'Affix')
const ScrollTo = r => require.ensure([], () => r(require('../pages/cn/ScrollTo.md')), 'ScrollTo')
const Tabs = r => require.ensure([], () => r(require('../pages/cn/Tabs.md')), 'Tabs')
const Tag = r => require.ensure([], () => r(require('../pages/cn/Tag.md')), 'Tag')
const Breadcrumb = r => require.ensure([], () => r(require('../pages/cn/Breadcrumb.md')), 'Breadcrumb')
const Progress = r => require.ensure([], () => r(require('../pages/cn/Progress.md')), 'Progress')
const Timeline = r => require.ensure([], () => r(require('../pages/cn/Timeline.md')), 'Timeline')
const Modal = r => require.ensure([], () => r(require('../pages/cn/Modal.md')), 'Modal')
const Aside = r => require.ensure([], () => r(require('../pages/cn/Aside.md')), 'Aside')
const Alert = r => require.ensure([], () => r(require('../pages/cn/Alert.md')), 'Alert')
const Notify = r => require.ensure([], () => r(require('../pages/cn/Notify.md')), 'Notify')
const Collapse = r => require.ensure([], () => r(require('../pages/cn/Collapse.md')), 'Collapse')
const Tooltip = r => require.ensure([], () => r(require('../pages/cn/Tooltip.md')), 'Tooltip')
const Popover = r => require.ensure([], () => r(require('../pages/cn/Popover.md')), 'Popover')
const PopConfirm = r => require.ensure([], () => r(require('../pages/cn/PopConfirm.md')), 'PopConfirm')
const DataTable = r => require.ensure([], () => r(require('../pages/cn/DataTable.md')), 'DataTable')
const Checkbox = r => require.ensure([], () => r(require('../pages/cn/Checkbox.md')), 'Checkbox')
const Radio = r => require.ensure([], () => r(require('../pages/cn/Radio.md')), 'Radio')
const Switch = r => require.ensure([], () => r(require('../pages/cn/Switch.md')), 'Switch')
const Dropdown = r => require.ensure([], () => r(require('../pages/cn/Dropdown.md')), 'Dropdown')
const Pagination = r => require.ensure([], () => r(require('../pages/cn/Pagination.md')), 'Pagination')
const Steps = r => require.ensure([], () => r(require('../pages/cn/Steps.md')), 'Steps')
const Menu = r => require.ensure([], () => r(require('../pages/cn/Menu.md')), 'Menu')
const InputNumber = r => require.ensure([], () => r(require('../pages/cn/InputNumber.md')), 'InputNumber')
const Form = r => require.ensure([], () => r(require('../pages/cn/Form.md')), 'Form')
// const DatePicker = r => require.ensure([], () => r(require('../pages/cn/DatePicker.md')), 'DatePicker')
const Select = r => require.ensure([], () => r(require('../pages/cn/Select.md')), 'Select')

export default new Router({
  routes: [
    {
	    path: '/',
	    component: Index,
	    children: [
	    	{
	        path: '',
	        component: GettingStarted,
	      }, {
	        path: 'changelog',
	        component: Changelog,
	      }, {
	        path: 'customize',
	        component: Customize,
	      },
	    ],
	  },
	  {
	    path: '/components',
	    component: Components,
	    children: [
	    	{
	        path: 'helper',
	        component: Helper,
	      },{
	        path: 'layout',
	        component: Layout,
	      },{
	        path: 'button',
	        component: Button,
	      }, {
	        path: 'icon',
	        component: Icon,
	      }, {
	        path: 'transition',
	        component: Transition,
	      }, {
	        path: 'affix',
	        component: Affix,
	      }, {
	        path: 'scrollto',
	        component: ScrollTo,
	      }, {
	        path: 'tabs',
	        component: Tabs,
	      }, {
	        path: 'tag',
	        component: Tag,
	      }, 
	      {
	        path: 'breadcrumb',
	        component: Breadcrumb,
	      }, {
	        path: 'progress',
	        component: Progress,
	      }, {
	        path: 'timeline',
	        component: Timeline,
	      }, {
	        path: 'modal',
	        component: Modal,
	      }, {
	        path: 'aside',
	        component: Aside,
	      }, {
	        path: 'alert',
	        component: Alert,
	      }, {
	        path: 'notify',
	        component: Notify,
	      }, {
	        path: 'collapse',
	        component: Collapse,
	      }, {
	        path: 'tooltip',
	        component: Tooltip,
	      }, {
	        path: 'popover',
	        component: Popover,
	      }, {
	        path: 'popconfirm',
	        component: PopConfirm,
	      }, {
	        path: 'datatable',
	        component: DataTable,
	      }, {
	        path: 'checkbox',
	        component: Checkbox,
	      }, 
	      {
	        path: 'radio',
	        component: Radio,
	      }, {
	        path: 'switch',
	        component: Switch,
	      }, {
	        path: 'dropdown',
	        component: Dropdown,
	      }, {
	        path: 'pagination',
	        component: Pagination,
	      }, {
	        path: 'steps',
	        component: Steps,
	      }, {
	        path: 'menu',
	        component: Menu,
	        children: [{
	          path: 'submenu1',
	          component: Menu,
	        }, {
	          path: 'submenu2',
	          component: Menu,
	        }, {
	          path: 'submenu3',
	          component: Menu,
	        },],
	      },
	      {
	        path: 'inputnumber',
	        component: InputNumber,
	      },{
	        path: 'form',
	        component: Form,
	      },
	      // {
	      //   path: 'datepicker',
	      //   component: DatePicker,
	      // },
	      {
	        path: 'select',
	        component: Select,
	      }

	    ],
	  }
  ]
})

import asideMainView from '@view/aside/asideMainView'
import gedan from '@view/aside/gedan'
import search from '@view/aside/search/searchMainView'
import findMusic from '@view/aside/findMusic/findMusicMainView'

export default{
    path: '/',
    name: 'asideMainView',
    component: asideMainView,
    children:[
    	{
    		path:'/gedan',
    		name: 'gedan',
    		component: gedan,
    	},
    	{
    		path:'/search',
    		name: 'search',
    		component: search,
    	},
    	{
    		path:'/findMusic',
    		name: 'findMusic',
    		component: findMusic,
    	},
    ]
}

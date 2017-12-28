import asideMainView from '@view/aside/asideMainView'
import gedan from '@view/aside/gedan'

export default{
    path: '/',
    name: 'asideMainView',
    component: asideMainView,
    children:[
    	{
    		path:'/gedan',
    		name: 'gedan',
    		component: gedan,
    	}
    ]
}

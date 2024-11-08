import views from '../views'

const {
    Home,
    Notes,
    Users
} = views


const privateRoutesData = [
    {
        element: <Home />,
        path: '/home'
    },
    {
        element: <Notes />,
        path: '/notes'
    },
    {
        element: <Users />,
        path: '/users'
    }
]

export default privateRoutesData
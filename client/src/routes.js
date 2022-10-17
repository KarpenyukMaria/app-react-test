//навігація між сторінками
import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes=[//задаємо навігацію для авторизованих користувачів
    {
        path:ADMIN_ROUTE,
        Component: Admin//який компонент відобразиться по цьому шляху
    },
    {
        path:BASKET_ROUTE,
        Component: Basket//який компонент відобразиться по цьому шляху
    }

]

export const publicRoutes=[//навігація для всіх користувачів
    {
        path:SHOP_ROUTE,
        Component: Shop//який компонент відобразиться по цьому шляху
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth//який компонент відобразиться по цьому шляху
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth//який компонент відобразиться по цьому шляху
    },
    {
        path:DEVICE_ROUTE+ '/:id',
        Component: DevicePage//який компонент відобразиться по цьому шляху
    }

]
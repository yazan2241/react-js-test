import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  ShopOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [

  {
    key: 'ОСНОВНЫЕ',
    title: 'ОСНОВНЫЕ',
    submenu: [
      {
        key: 'Двшборд',
        path: `${APP_PREFIX_PATH}/двшборд`,
        title: 'Двшборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Каталог',
        path: `${APP_PREFIX_PATH}/каталог`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'Товары',
            path: `${APP_PREFIX_PATH}/товары`,
            title: 'Двшборд',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'Категории',
            path: `${APP_PREFIX_PATH}/категории`,
            title: 'Категории',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'Коллекции',
            path: `${APP_PREFIX_PATH}/коллекции`,
            title: 'Коллекции',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'Комбо',
            path: `${APP_PREFIX_PATH}/комбо`,
            title: 'Комбо',
            breadcrumb: false,
            submenu: []
          },
        ],
      },
      {
        key: 'Заказы',
        path: `${APP_PREFIX_PATH}/заказы`,
        title: 'Заказы',
        icon : ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Клиенты',
        path: `${APP_PREFIX_PATH}/клиенты`,
        title: 'Клиенты',
        icon : UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'Список_клиентов',
            path: `${APP_PREFIX_PATH}/список_клиентов`,
            title: 'Список клиентов',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'Группы_клиентов',
            path: `${APP_PREFIX_PATH}/группы_клиентов`,
            title: 'Группы клиентов',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'Баннеры',
        path: `${APP_PREFIX_PATH}/баннеры`,
        title: 'Баннеры',
        icon : PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Промокоды',
        path: `${APP_PREFIX_PATH}/промокоды`,
        title: 'Промокоды',
        icon : GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Оффлайн_точки',
        path: `${APP_PREFIX_PATH}/оффлайн_точки`,
        title: 'Оффлайн точки',
        icon : ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'Адреса',
            path: `${APP_PREFIX_PATH}/адреса`,
            title: 'Адреса',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'Геозоны',
            path: `${APP_PREFIX_PATH}/геозоны`,
            title: 'Геозоны',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'Сотрудники',
        path: `${APP_PREFIX_PATH}/сотрудники`,
        title: 'Сотрудники',
        icon : UsergroupAddOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Рассылки',
        path: `${APP_PREFIX_PATH}/рассылки`,
        title: 'Рассылки',
        icon : MailOutlined,
        breadcrumb: false,
        submenu: []
      },

    ]
  },


  {
    key: 'Системные',
    title: 'системные',
    breadcrumb: false,
    submenu: [
      {
        key: 'Настройки',
        path: `${APP_PREFIX_PATH}/настройки`,
        title: 'Настройки',
        icon : SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Мобильное_приложение',
        path: `${APP_PREFIX_PATH}/мобильное_приложение`,
        title: 'Мобильное приложение',
        icon : MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'Логи',
        path: `${APP_PREFIX_PATH}/логи`,
        title: 'Логи',
        icon : FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;

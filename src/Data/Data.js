import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUserMd
  } from '@iconscout/react-unicons'
  import { UilBriefcaseAlt } from '@iconscout/react-unicons'
  import { UilGrid } from '@iconscout/react-unicons'
  
  
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons'
  import { UilAngleDown } from '@iconscout/react-unicons'
  import { UilBag } from '@iconscout/react-unicons'
  import { ImportExport } from '@mui/icons-material'
  import { keyboard } from '@testing-library/user-event/dist/keyboard'
import IconDashboard from '../icons/IconDashboard'
  
 
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: IconDashboard,
      heading: 'Dashboard',
      navigate: '/',
      index: 0,
      dropdown: false
    },
    {
      icon: UilClipboardAlt,
      heading: 'Orders',
      navigate: '/orders',
      index: 1,
      dropdown: false
    },
    {
      icon: UilUsersAlt,
      heading: 'Customers',
      navigate: '/customers',
      index: 2,
      dropdown: false
    },
    {
      icon: UilPackage,
      dropIcon: UilAngleDown,
      heading: 'Products',
      navigate: '/products',
      index: 3,
      dropdown: true,
    },
    {
      icon: UilGrid,
      dropIcon: UilAngleDown,
      heading: 'Categories',
      navigate: '/category',
      index: 4,
      dropdown: true,
    },
    {
      icon: UilUserMd,
      dropIcon: UilAngleDown,
      heading: 'Employees',
      navigate: '/employees',
      index: 5,
      dropdown: true,
    },
    {
      icon: UilBriefcaseAlt,
      dropIcon: UilAngleDown,
      heading: 'Supliers',
      navigate: '/supliers',
      index: 6,
      dropdown: true,
    },
    
  ]
  
  export const CardsData = [
    {
      title: 'Sales',
      color: {
        backGround:
        '#FFF5E0',
      },
      barValue: 70,
      value: '25,970',
      png: UilUsdSquare,
      series: [
        {
          name: 'Sales',
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]
    },
    {
      title: 'Revenue',
      color: {
        backGround:
          '#EFE6F6',
      },
      barValue: 80,
      value: '14,270',
      png: UilMoneyWithdrawal,
      series: [
        {
          name: 'Revenue',
          data: [10, 100, 50, 70, 80, 30, 40]
        }
      ]
    },
    {
      title: 'Expenses',
      color: {
        backGround:
        '#E0F8EA',
      },
      barValue: 60,
      value: '4,270',
      png: UilClipboardAlt,
      series: [
        {
          name: 'Expenses',
          data: [10, 25, 15, 30, 12, 15, 20]
        }
      ]
    }
  ]

  export const UpdatesData = [
    {
      img: 'https://randomuser.me/api/portraits/women/94.jpg',
      name: 'Ratazana ',
      noti: 'comprou um brinco.',
      time: '25 seconds ago'
    },
    {
      img: 'https://randomuser.me/api/portraits/men/34.jpg',
      name: 'Homem Rinoplastia ',
      noti: 'comprou um colar.',
      time: '30 minutes ago'
    },
    {
      img: 'https://randomuser.me/api/portraits/men/27.jpg',
      name: 'Davi ',
      noti: 'lorem ipsum kkkk.',
      time: '2 hours ago'
    }
  ]

  export const ProductsData = [
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_626921-MLB51033775318_082022-O.webp',
      productName: 'Macbook Pro De 13.3 Chip M2 Apple, 16gb Ram, 512gb Ssd, 12x',
      price: 15.900,
      category: 'Colar',
      status: 'active'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp',
      productName: 'Apple Iphone 14 Pro Max',
      price: 5000.00,
      category: 'Anel',
      status: 'inactive'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp',
      productName: 'Sony PlayStation 5 825GB',
      price: 1500.00,
      category: 'Brinco',
      status: 'active'
    },
    {
      productImage: 'https://images-americanas.b2w.io/produtos/2116246256/imagens/relogio-inteligente-smartwatch-w34-s-preto-troca-pulseira-android-ios-ligacoes-monitor-cardiaco/2116246264_1_large.jpg',
      productName: 'SmartWatch W34 S',
      price: 1500.00,
      category: 'Colar',
      status: 'active'
    },
  ]

  export const CategoriesData = [
    {
      categoryImage: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3635&hei=2548&qlt=100,1&resMode=sharp2&size=3635,2548&chrss=full&imwidth=5000',
      categoryName: 'Laptops',
      slug: 'laptop-',
      status: 'active'
    },
    {
      categoryImage: 'https://imgs.casasbahia.com.br/55058630/1g.jpg',
      categoryName: 'Smartphones',
      slug: 'smartphones-',
      status: 'active'
    },
    {
      categoryImage: 'https://imgs.casasbahia.com.br/55014094/1xg.jpg?imwidth=500',
      categoryName: 'Consoles',
      slug: 'consoles-',
      status: 'active'
    },
    {
      categoryImage: 'https://a-static.mlcdn.com.br/450x450/relogio-smart-watch-w37-pro-serie-7-watch-7-tela-infinita-carregador-inducao-wearfit/ideconnect/e88b10e49c2f11ecbb064201ac185055/5c1d9a8d655fe4cf9d05011c785d89ef.jpeg',
      categoryName: 'Watch',
      slug: 'watch-',
      status: 'active'
    },
  ]

  export const CustomersData = [
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/5.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/men/16.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/women/74.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
  ]

  export const EmployeesData = [
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/0.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/7.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/2.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/8.jpg',
      customerName: 'Laptops',
      email: 'laptop-',
      cpf: 'active'
    },
  ]

  export const SupliersData = [
    {
      customerImage: 'https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg',
      customerName: 'Empresa-1',
      category: 'laptop-',
      mainContact: '45654836454',
      status: 'active'
    },
    {
      customerImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
      customerName: 'Empresa-2',
      category: 'laptop-',
      mainContact: '45654836454',
      status: 'active'
    },
    {
      customerImage: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
      customerName: 'Empresa-3',
      category: 'laptop-',
      mainContact: '45654836454',
      status: 'active'
    },
    {
      customerImage: 'https://www.shutterstock.com/image-photo/windows-skyscraper-business-office-blue-260nw-558873121.jpg',
      customerName: 'Empresa-4',
      category: 'laptop-',
      mainContact: '45654836454',
      status: 'active'
    },
  ]
  
  
  
  
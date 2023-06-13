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
  import { UilUserSquare } from '@iconscout/react-unicons'
  import { UilTruck } from '@iconscout/react-unicons'
  import { UilBuilding } from '@iconscout/react-unicons'
  import { UilMoneyStack } from '@iconscout/react-unicons'
  import { UilCalender } from '@iconscout/react-unicons'
  import { UilConstructor } from '@iconscout/react-unicons'
  import { UilAmazon } from '@iconscout/react-unicons'
  import { UilFileContractDollar } from '@iconscout/react-unicons'
  import { UilBill } from '@iconscout/react-unicons'
  
  
  
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
      heading: 'Posição de venda',
      navigate: '/posicao-de-venda',
      index: 1,
      dropdown: false
    },
    {
      icon: UilUsersAlt,
      heading: 'Usuários',
      navigate: '/usuarios',
      index: 2,
      dropdown: false
    },
    {
      icon: UilUserSquare,
      heading: 'Clientes',
      navigate: '/clientes',
      index: 3,
      dropdown: false
    },
    {
      icon: UilPackage,
      dropIcon: UilAngleDown,
      heading: 'Produtos',
      navigate: '/produtos',
      index: 4,
      dropdown: true,
    },
    {
      icon: UilGrid,
      dropIcon: UilAngleDown,
      heading: 'Categorias',
      navigate: '/categorias',
      index: 5,
      dropdown: true,
    },
    {
      icon: UilUserMd,
      dropIcon: UilAngleDown,
      heading: 'Funcionários',
      navigate: '/funcionarios',
      index: 6,
      dropdown: true,
    },
    {
      icon: UilBriefcaseAlt,
      dropIcon: UilAngleDown,
      heading: 'Fornecedores',
      navigate: '/fornecedores',
      index: 7,
      dropdown: true,
    },
    {
      icon: UilTruck,
      dropIcon: UilAngleDown,
      heading: 'Transportadoras',
      navigate: '/transportadoras',
      index: 8,
      dropdown: true,
    },
    {
      icon: UilBuilding,
      dropIcon: UilAngleDown,
      heading: 'Empresas ligadas',
      navigate: '/empresas',
      index: 9,
      dropdown: true,
    },
    {
      icon: UilMoneyStack,
      dropIcon: UilAngleDown,
      heading: 'Operações fiscais',
      navigate: '/operacoes-fiscais',
      index: 10,
      dropdown: true,
    },
    {
      icon: UilCalender,
      dropIcon: UilAngleDown,
      heading: 'Plano de contas',
      navigate: '/plano-de-contas',
      index: 11,
      dropdown: true,
    },
    {
      icon: UilConstructor,
      dropIcon: UilAngleDown,
      heading: 'Serviços',
      navigate: '/servicos',
      index: 12,
      dropdown: true,
    },
    {
      icon: UilUsdSquare,
      dropIcon: UilAngleDown,
      heading: 'Movimentação finaceira',
      navigate: '/movimentacao-financeira',
      index: 13,
      dropdown: true,
    },
    {
      icon: UilAmazon,
      dropIcon: UilAngleDown,
      heading: 'Ecommerce',
      navigate: '/ecommerce',
      index: 14,
      dropdown: true,
    },
    {
      icon: UilFileContractDollar,
      dropIcon: UilAngleDown,
      heading: 'Orçamentos',
      navigate: '/orcamentos',
      index: 15,
      dropdown: true,
    },
    {
      icon: UilBill,
      dropIcon: UilAngleDown,
      heading: 'Ordem de serviço',
      navigate: '/ordem-de-servico',
      index: 16,
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
      productName: 'Macbook Pro ',
      price: 15.900,
      category: 'Colar',
      status: 'active'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp',
      productName: 'Apple Iphone',
      price: 5000.00,
      category: 'Anel',
      status: 'inactive'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp',
      productName: 'Sony PlayStation 5',
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
      mainContact: '456',
      status: 'active'
    },
    {
      customerImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg',
      customerName: 'Empresa-2',
      category: 'laptop-',
      mainContact: '456',
      status: 'active'
    },
    {
      customerImage: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
      customerName: 'Empresa-3',
      category: 'laptop-',
      mainContact: '4565',
      status: 'active'
    },
    {
      customerImage: 'https://www.shutterstock.com/image-photo/windows-skyscraper-business-office-blue-260nw-558873121.jpg',
      customerName: 'Empresa-4',
      category: 'laptop-',
      mainContact: '456',
      status: 'active'
    },
  ]

  export const ClientsData = [
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/0.jpg',
      customerName: 'João da Silva',
      fantasyName: 'João',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/0.jpg',
      customerName: 'Maria',
      fantasyName: 'Maria',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/0.jpg',
      customerName: 'Carlos Santos',
      fantasyName: 'Carlos',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://randomuser.me/api/portraits/lego/6.jpg',
      customerName: 'Davi',
      fantasyName: 'Davi Carvalho',
      codigo: '456',
      status: 'active'
    },
  ]

  export const CarriersData = [
    {
      customerImage: 'https://www.twtransportes.com.br/wp-content/uploads/2021/11/caminhao1.jpg',
      customerName: 'Empresa-1',
      fantasyName: 'teste',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://uploads-ssl.webflow.com/5e1cab8214cecfc49d37df0a/63c1aa99aea56071319903b0_blog_custo-de-transportadora-carga.jpg',
      customerName: 'Empresa-1',
      fantasyName: 'teste',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://dernegocios.com.br/wp-content/uploads/2022/09/Transportadora.jpg',
      customerName: 'Empresa-1',
      fantasyName: 'teste',
      codigo: '456',
      status: 'active'
    },
    {
      customerImage: 'https://www.prestex.com.br/wp-content/uploads/2021/04/Blog_Prestex-04.png',
      customerName: 'Empresa-1',
      fantasyName: 'teste',
      codigo: '456',
      status: 'active'
    },
  ]
  
  export const TaxOperationData = [
    {
      cfop: '1101',
      natureName: 'Lorem ipsum',
      gerarFaturamento: 'sim',
      gerarEstoque: 'não'
    },
    {
      cfop: '1101',
      natureName: 'Lorem ipsum',
      gerarFaturamento: 'sim',
      gerarEstoque: 'não'
    },
    {
      cfop: '1101',
      natureName: 'Lorem ipsum',
      gerarFaturamento: 'sim',
      gerarEstoque: 'não'
    },
    {
      cfop: '1101',
      natureName: 'Lorem ipsum',
      gerarFaturamento: 'sim',
      gerarEstoque: 'não'
    },
  ]

  export const AccountsData = [
    {
      codigo: '115',
      codigoExtendido: '115468',
      grupo: 'Despesas',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      codigoExtendido: '115468',
      grupo: 'Despesas',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      codigoExtendido: '115468',
      grupo: 'Despesas',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      codigoExtendido: '115468',
      grupo: 'Despesas',
      descricao: 'Lorem Ipsum'
    },
  ]

  export const ServicesData = [
    {
      codigo: '115',
      unidade: 'Ocorrências',
      valor: '$25.000',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      unidade: 'Ocorrências',
      valor: '$25.000',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      unidade: 'Ocorrências',
      valor: '$25.000',
      descricao: 'Lorem Ipsum'
    },
    {
      codigo: '115',
      unidade: 'Ocorrências',
      valor: '$25.000',
      descricao: 'Lorem Ipsum'
    },
  ]

  export const OrdersData = [
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_626921-MLB51033775318_082022-O.webp',
      productName: 'Macbook Pro ',
      price: 15.900,
      nomeCliente: 'Davi',
      entrega: 'entregue'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_626921-MLB51033775318_082022-O.webp',
      productName: 'Macbook Pro ',
      price: 15.900,
      nomeCliente: 'João',
      entrega: 'a caminho'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_626921-MLB51033775318_082022-O.webp',
      productName: 'Macbook Pro ',
      price: 15.900,
      nomeCliente: 'Marcos',
      entrega: 'retirado'
    },
    {
      productImage: 'https://http2.mlstatic.com/D_NQ_NP_626921-MLB51033775318_082022-O.webp',
      productName: 'Macbook Pro ',
      price: 15.900,
      nomeCliente: 'Felipe',
      entrega: 'entregue'
    },
  ]

  export const EcommerceData = [
    {
      productImage: 'https://venngage-wordpress-pt.s3.amazonaws.com/uploads/2020/03/loja-virtual-1.png',
      productName: 'Loja 1',
      idApp: '122',
      idUser: '56',
      status: 'active'
    },
  ]

  export const BudgetsData = [
    {
      codigo: '115',
      descricao: 'placa de video',
      un: 'pc',
      qtd: 1,
      precoUnitario: 250,
      valorTotal:250
    },
    {
      codigo: '115',
      descricao: 'placa de video',
      un: 'pc',
      qtd: 1,
      precoUnitario: 250,
      valorTotal:250
    },
    {
      codigo: '115',
      descricao: 'placa de video',
      un: 'pc',
      qtd: 1,
      precoUnitario: 250,
      valorTotal:250
    },
    {
      codigo: '115',
      descricao: 'placa de video',
      un: 'pc',
      qtd: 1,
      precoUnitario: 250,
      valorTotal:250
    },
  ]

  export const ServiceOrderData = [
    {
      codigo: '115',
      codNf: '2131',
      tec: 'Davi',
      descricao: 'lorem ipsum',
      dataEntrada: 250,
      status:'active'
    },
    {
      codigo: '115',
      codNf: '2131',
      tec: 'Davi',
      descricao: 'lorem ipsum',
      dataEntrada: 250,
      status:'active'
    },
    {
      codigo: '115',
      codNf: '2131',
      tec: 'Davi',
      descricao: 'lorem ipsum',
      dataEntrada: 250,
      status:'active'
    },
    {
      codigo: '115',
      codNf: '2131',
      tec: 'Davi',
      descricao: 'lorem ipsum',
      dataEntrada: 250,
      status:'active'
    },
  ]
  
  
  
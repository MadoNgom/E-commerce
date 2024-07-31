export const MENU_ITEMS: any[] = [
  {
    label: 'Dashboard',
    icon: 'bi bi-columns-gap',
    link: '/boutiquier/dashboard',
    roles: ['admin', 'boutiquier'],
  },
  {
    label: 'Produits',
    icon: 'bi bi-boxes',
    roles: ['admin', 'boutiquier'],
    dropdown: [
      {
        label: 'Ajouter Produits',
        link: '/boutiquier/ajout-produit',
      },
      {
        label: 'Tous les Produits',
        link: '/boutiquier/produits',
      },
    ],
  },
  {
    label: 'Categories',
    icon: 'bi bi-bag-check-fill',
    link: '/boutiquier/ajout-categories',
    roles: ['boutiquier'],
  },
  {
    label: 'Commande Clients',
    icon: 'bi bi-bag-check-fill',
    link: '/admin/dashboard',
    roles: ['admin'],
  },
  {
    label: 'Mes Ventes',
    icon: 'bi bi-person-fill-gear',
    link: '',
    roles: ['client'],
  },
  {
    label: 'Déconnexion',
    icon: 'bi bi-box-arrow-right text-white fs-5 logout ',
    link: '',
    roles: ['admin', 'client', 'boutiquier'],
    className: 'logout mx-2',
    clickHandler: 'logout',
  },
];

// <li class="nav-item active">
// <span><i class="bi bi-columns-gap"></i></span>
// <a href="" class="nav-link" routerLink="/boutiquier/dashboard">
//   Dashboard</a
// >
// </li>

// <li class="nav-item">
// <span> <i class="bi bi-boxes"></i></span>
// <div class="dropdown">
//   <a
//     class="btn btn-secondary dropdown-toggle"
//     href="#"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Produits
//   </a>

//   <ul class="dropdown-menu">
//     <li>
//       <a
//         class="dropdown-item"
//         href="#"
//         routerLink="/boutiquier/ajout-produit"
//         >Ajouter Produits</a
//       >
//     </li>
//     <li>
//       <a class="dropdown-item" href="" routerLink="/boutiquier/produits"
//         >Tous les Produits</a
//       >
//     </li>
//   </ul>
// </div>
// </li>
// <li class="nav-item">
// <span><i class="bi bi-bag-check-fill"></i></span>
// <a href="" class="nav-link" routerLink="/boutiquier/ajout-categories"
//   >Categories</a
// >
// </li>
// <li class="nav-item active">
// <span><i class="bi bi-bag-check-fill"></i></span>
// <a href="" class="nav-link" routerLink="/admin/dashboard">
//   Commande Clients</a
// >
// </li>
// <li class="nav-item">
// <span><i class="bi bi-person-fill-gear"></i></span>
// <a href="" class="nav-link">Mes Ventes</a>
// </li>

// <li class="nav-item logout">
// <a href="" class="nav-link"
//   ><i class="bi bi-box-arrow-right text-white fs-5"></i> Déconnection</a
// >
// </li>

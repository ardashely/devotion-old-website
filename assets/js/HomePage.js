const vue = new Vue();
const vuetify = new Vuetify();

let app = new Vue ({
    el: '#main',
    vuetify: new Vuetify ({
        theme: {
            dark: true,
        }
    }),
    data: {
        pageOptions: [
            {
                Title: 'Devotion | Anasayfa',
                Icon: '',
                alertMessage: 'Sitemiz henüz geliştirme aşamasıdna olduğundan dolayı bazı hatalar meydana gelebilir, bunları bize bildirmekten çekinme.'
            }
        ],
        homeOptions: [
            {
                Header: 'DEVOTİON',
            }
        ],
        bottomNavOptions: [
            {
                shopIcon: 'mdi-cart',
                homePageIcon: 'mdi-home',
                optionsIcon: 'mdi-menu',
            }
        ],
        optionsCard: [
            {
                cardHeaderIcon: 'mdi-settings',
                cardHeader: 'Seçenekler',
                oneSwitchAuthor: 'Koyu Mod',
            }
        ],
        homePageContent: [
            {
                Header: 'Devotion Network',
                Author: 'Özgür yazılım, özgür topluluk.',
            }
        ],
        ordersCard: [
            {
                Icon: 'mdi-cart',
                Title: 'Siparişler',
                Number: '[null]',
                Author: 'Total sipariş miktarı',
            }
        ],
        sponsorsCard: [
            {
                Icon: 'mdi-check-decagram',
                Title: 'Ortaklarımız',
                Number: '[null]',
                Author: 'İş ortaklarımız',
            }
        ],
        personelCard: [
            {
                Icon: 'mdi-account-check',
                Title: 'Ekibimiz',
                Number: '[null]',
                Author: 'Personel ekibimiz',
            }
        ]
    }
})
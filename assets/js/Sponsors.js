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
                Title: 'Devotion | Ortaklarımız',
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
                Header: 'İş Ortaklarımız',
                Author: 'Devotion Network',
            }
        ],
        sponsorOneCard: [
            {
                Icon: 'mdi-check-decagram',
                Title: 'Weboserver',
                Author: 'Siteye Git',
            }
        ],
        sponsorTwoCard: [
            {
                Icon: 'mdi-check-decagram',
                Title: 'StalkLive',
                Author: 'Siteye Git',
            }
        ],
    }
})
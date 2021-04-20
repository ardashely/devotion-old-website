const vue = new Vue();
const vuetify = new Vuetify();

let app = new Vue ({
    el: '#shop',
    vuetify: new Vuetify ({
        theme: {
            dark: true,
        }
    }),
    methods: {
        aksiyon:function(event) {
            console.log('basarili')
        }
    },
    data: {
        dialogOne: false,
        dialogTwo: false,
        dialogThree: false,
        dialogFour: false,
        pageOptions: [
            {
                Title: 'Devotion | Market',
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
        shopPageContent: [
            {
                Header: 'Sipariş Verin',
                Author: 'Devotion Network',
            }
        ],
        packageOne: [
            {
                Title: 'Paket I',
                Tauth: '50.99 ₺',
                Author: 'Moderasyon + Register',
                Author2: '4 GB Webvo Server VDS',
                Author3: 'Ekip sunucularına önerimizdir',
                buttonText: 'Sipariş Ver',
            }
        ],
        authorCardOne: [
            {
                Title: 'Paket I',
                longAuth: 'AUghsayhıdgvbsayhdgvs',
                buttonText: 'Tamam'
            }
        ],
        packageTwo: [
            {
                Title: 'Paket II',
                Tauth: '50.99 ₺',
                Author: 'Moderasyon + Register',
                Author2: '5 Adet Kapsamlı Guard',
                Author3: '6 GB Webvo Server VDS' ,
                buttonText: 'Sipariş Ver',
            }
        ],
        authorCardTwo: [
            {
                Title: 'Paket II',
                longAuth: 'AUghsayhıdgvbsayhdgvs',
                buttonText: 'Tamam'
            }
        ],
        packageThree: [
            {
                Title: 'Paket III',
                Tauth: '50.99 ₺',
                Author: 'Moderasyon + Register',
                Author2: 'Guard + Stats + İnvite',
                Author3: '8 GB Webvo Server VDS',
                buttonText: 'Sipariş Ver',
            }
        ],
        authorCardThree: [
            {
                Title: 'Paket III',
                longAuth: 'AUghsayhıdgvbsayhdgvs',
                buttonText: 'Tamam'
            }
        ],
        packageFour: [
            {
                Title: 'Paket IV',
                Tauth: '50.99 ₺',
                Author: 'Paket 3 Botları + Ses Botları',
                Author2: 'Gelişmiş Audit Botları',
                Author3: '12 GB Webvo Server VDS',
                Author4: 'Büyük public sunucularına önerimizdir',
                buttonText: 'Sipariş Ver',
            }
        ],
        authorCardFour: [
            {
                Title: 'Paket IV',
                longAuth: 'AUghsayhıdgvbsayhdgvs',
                buttonText: 'Tamam'
            }
        ],
    }
})
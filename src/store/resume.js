import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', {

    state() {
        return {
            //DO NOT use 'all' or 'invalid' as id. They are reserved words.
            skills: [
                {id: 'web-design', name: 'طراحی وب'},
                {id: 'game-development', name: 'بازی‌سازی'},
                {id: 'android-development', name: 'توسعه اندروید'},
                {id: 'logo-design', name: 'طراحی لوگو'},
                {id: 'motiongraphics-design', name: 'طراحی موشن گرافیک'},
                {id: 'ui-design', name: 'طراحی رابط کاربری'},
                {id: 'banner-design', name: 'طراحی بنر / پوستر'},
                {id: 'visitcard-design', name: 'طراحی کارت ویزیت'},
                {id: 'letterhead-design', name: 'طراحی سربرگ'}
            ],

            tools: [
                {id: 'adobe-aftereffects', name: 'Adobe After Effects'},
                {id: 'adobe-photoshop', name: 'Adobe Photoshop'},
                {id: 'adobe-illustrator', name: 'Adobe Illustrator'},
                {id: 'adobe-xd', name: 'Adobe XD'},
                {id: 'figma', name: 'Figma'},
                {id: 'android-studio', name: 'Android Studio'},
                {id: 'c-sharp', name: 'C Sharp'},
                {id: 'java', name: 'Java'},
                {id: 'html', name: 'HTML'},
                {id: 'css', name: 'CSS'},
                {id: 'bootstrap', name: 'Bootstrap'},
                {id: 'javascript', name: 'JavaScript'},
                {id: 'vuejs', name: 'Vue.js'},
                {id: 'pinia', name: 'Pinia'},
                {id: 'mongodb', name: 'MongoDB'},
                {id: 'nodejs', name: 'Node.js'},
                {id: 'npm', name: 'npm'},
                {id: 'ubuntu', name: 'Ubuntu (server)'},
                {id: 'unity', name: 'Unity'},
                {id: 'docusaurus', name: 'Docusaurus'},
                {id: 'wordpress', name: 'WordPress'},
                {id: 'vs-code', name: 'VS Code'}
            ],

            portfolios: [
                {
                    id: 'chromatophore-game',
                    title: 'بازی کروماتوفور',
                    skill: 'game-development',
                    is_opensource: true,
                    thumbnail_file: 'chromatophore-game1.png',
                    gallery: ['chromatophore-game1.png', 'chromatophore-game2.png', 'chromatophore-game3.png', 'chromatophore-game4.png', 'chromatophore-game5.png'],
                    description: 'کروماتوفورها سلول‌هایی هستن که باعث تغییر رنگ پوست حیواناتی مثل آفتاب‌پرست می‌شن. حالا تصور کنید اگه توپی وجود داشت که سطحش از این سلول‌ها پوشیده شده بود چه اتفاقی می‌افتاد؟\nاون توپ با وارد شدن به هر سطح رنگی‌ای، به رنگ همون سطح در می‌اومد؛\nو این اتفاقیه که توی این بازی شاهدش هستیم...\n\nکروماتوفور در کافه بازار:\nhttps://cafebazaar.ir/app/ir.asajadi.chromatophore\n\nکروماتوفور در مایکت:\nhttps://myket.ir/app/ir.asajadi.chromatophore',
                    tools: ['adobe-photoshop', 'adobe-illustrator', 'c-sharp', 'unity'],
                    status: 'فعال',
                    link_url: 'https://github.com/asajadi84/chromatophore'
                },
                                {
                    id: 'royatel-website',
                    title: 'وبسایت فروشگاهی رویاتل',
                    skill: 'web-design',
                    is_opensource: false,
                    thumbnail_file: 'royatel-website1.png',
                    gallery: ['royatel-website1.png', 'royatel-website2.png', 'royatel-website3.png', 'royatel-website4.png'],
                    description: 'طراحی وبسایت فروشگاهی رویاتل (فروش عمده تلفن همراه و تجهیزات جانبی) با امکانات:\n- عضویت عادی و همکار در فروشگاه و ارائه قیمت متناسب با سطح کاربر\n- تایید یا رد همکاران و ویرایش مشخصات و سطح آن‌ها\n- ارسال پیامک به افراد پس از تایید کاربری و پردازش فاکتورها\n- صدور فاکتور چاپی از طرف فروشگاه\n- تعریف برند و اولویت نمایش آن‌ها در صفحه اصلی سایت و لیست قیمت\n- تعریف محصولات در رنگ‌های مختلف\n- مدیریت اسلایدر و اعلانات در صفحه اصلی\n- وجود API به منظور اتصال سایر اپلیکیشن‌ها\n- اتصال به درگاه‌های بانکی ملی، ملت و پاسارگاد\nو...',
                    tools: ['adobe-photoshop', 'adobe-illustrator', 'adobe-xd', 'html', 'css', 'bootstrap', 'javascript', 'mongodb', 'nodejs', 'npm', 'ubuntu', 'vs-code'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'child21-motion',
                    title: 'موشن گرافیک پیج دکتر سعید رحیمی',
                    skill: 'motiongraphics-design',
                    is_opensource: false,
                    thumbnail_file: 'child21-motion-cover.png',
                    gallery: ['child21-motion1.mp4', 'child21-motion2.mp4'],
                    description: 'طراحی موشن گرافیک در قالب پست ویدیویی برای پیج روانشناسی کودک در اینستاگرام',
                    tools: ['adobe-aftereffects', 'adobe-photoshop', 'adobe-illustrator'],
                    status: 'فعال',
                    link_url: 'https://instagram.com/child21_psycho'
                },
                {
                    id: 'pishraft-website',
                    title: 'وبسایت هواداران جمعیت پیشرفت و عدالت',
                    skill: 'web-design',
                    is_opensource: false,
                    thumbnail_file: 'pishraft-website1.png',
                    gallery: ['pishraft-website1.png', 'pishraft-website2.png', 'pishraft-website3.png', 'pishraft-website4.png'],
                    description: 'با امکاناتی از قبیل عضویت، تعریف سطح برای هر کاربر، ارسال پیام کاربران به یکدیگر، دریافت کارت عضویت، ارسال درخواست ارتقای کاربری به مدیر بالاتر و...',
                    tools: ['adobe-photoshop', 'adobe-illustrator', 'adobe-xd', 'html', 'css', 'bootstrap', 'javascript', 'mongodb', 'nodejs', 'npm', 'ubuntu', 'vs-code'],
                    status: 'فعال',
                    link_url: 'https://pishraft.iran.liara.run'
                },
                                {
                    id: 'unitycorn-website',
                    title: 'وبسایت یونیتیکورن',
                    skill: 'web-design',
                    is_opensource: true,
                    thumbnail_file: 'unitycorn-website1.png',
                    gallery: ['unitycorn-website1.png', 'unitycorn-website2.png', 'unitycorn-website3.png', 'unitycorn-website4.png'],
                    description: 'وبسایت آموزش بازیسازی یونیتیکورن با\n- آموزش اصول اولیه کار با موتور بازیسازی یونیتی\n- آموزش کدنویسی سی شارپ\n- آموزش استفاده از سی شارپ در کدنویسی بازی\n- آموزش مقدماتی فتوشاپ به منظور طراحی آرت بازی\nو...\n(کلیه مطالب به صورت تالیفی و اوپن سورس است)',
                    tools: ['adobe-photoshop', 'adobe-illustrator', 'css', 'javascript', 'nodejs', 'npm', 'docusaurus', 'vs-code'],
                    status: 'فعال',
                    link_url: 'https://unitycorn.ir'
                },
                {
                    id: 'breakout-game',
                    title: 'بازی بریک اوت',
                    skill: 'game-development',
                    is_opensource: true,
                    thumbnail_file: 'breakout-game1.png',
                    gallery: ['breakout-game1.png', 'breakout-game2.png'],
                    description: 'یک نمونه ساده از بازی معروف بریک اوت که برای تدریس بازیسازی در کارگاه دانشگاه آزاد توسعه داده شد.',
                    tools: ['adobe-photoshop', 'c-sharp', 'unity'],
                    status: 'فعال',
                    link_url: 'https://github.com/asajadi84/Unity-Breakout'
                },
                {
                    id: 'dabestaan-game',
                    title: 'بازی ریاضی اول دبستان',
                    skill: 'game-development',
                    is_opensource: true,
                    thumbnail_file: 'dabestaan-game1.png',
                    gallery: ['dabestaan-game1.png', 'dabestaan-game2.png', 'dabestaan-game3.png', 'dabestaan-game4.png', 'dabestaan-game5.png', 'dabestaan-game6.png', 'dabestaan-game7.png'],
                    description: 'بازی ریاضی اول دبستان که چند درس اول کتاب درسی را به صورت تعاملی آموزش داده و در مرحله بعدی مورد آزمون قرار می‌دهد.',
                    tools: ['adobe-photoshop', 'adobe-illustrator', 'c-sharp', 'unity'],
                    status: 'فعال',
                    link_url: 'https://github.com/asajadi84/dabestaan1'
                },
                {
                    id: 'mohamadhajihasani-website',
                    title: 'وبسایت شخصی محمد حاجی حسنی',
                    skill: 'web-design',
                    is_opensource: false,
                    thumbnail_file: 'mohamadhajihasani-website.png',
                    gallery: ['mohamadhajihasani-website.png'],
                    description: 'تک صفحه و بدون بک اند',
                    tools: ['adobe-xd', 'html', 'css', 'bootstrap', 'vs-code'],
                    status: 'فعال',
                    link_url: 'https://mohamadhajihasani.ir'
                },
                {
                    id: 'hamekara-banner',
                    title: 'بنرهای همه کارا',
                    skill: 'banner-design',
                    is_opensource: false,
                    thumbnail_file: 'hamekara-square-banner.png',
                    gallery: ['hamekara-square-banner.png', 'hamekara-app-banner1.png', 'hamekara-app-banner2.png', 'hamekara-app-banner3.png', 'hamekara-form.png'],
                    description: 'طراحی بنر برای مجموعه «همه کارا» در قالب بنرهای تبلیغاتی درون اپلیکیشن، بنرهای تبلیغاتی برای مجلات چاپی و فرم اداره پست',
                    tools: ['adobe-photoshop', 'adobe-illustrator'],
                    status: 'فعال',
                    link_url: 'https://hamekara.com'
                },
                {
                    id: 'misterfox-visitcard',
                    title: 'کارت ویزیت استودیو مستر فاکس',
                    skill: 'visitcard-design',
                    is_opensource: false,
                    thumbnail_file: 'misterfox-visitcard-front.png',
                    gallery: ['misterfox-visitcard-front.png', 'misterfox-visitcard-back.png'],
                    description: 'طراحی کارت ویزیت برای استودیوی عکاسی',
                    tools: ['adobe-photoshop'],
                    status: 'فعال',
                    link_url: 'https://instagram.com/misterfoxstudio'
                },
                {
                    id: 'masters-instagram-banner',
                    title: 'بنر بایدها و نبایدهای کنکور کارشناسی ارشد',
                    skill: 'banner-design',
                    is_opensource: false,
                    thumbnail_file: 'masters-instagram-banner.png',
                    gallery: ['masters-instagram-banner.png'],
                    description: 'طراحی بنر برای لایو اینستاگرامی «بایدها و نبایدهای کنکور کارشناسی ارشد»',
                    tools: ['adobe-photoshop'],
                    status: 'به اتمام رسیده',
                    link_url: 'ندارد'
                },
                {
                    id: 'nima-logo',
                    title: 'لوگوی کاردرمانی نیما احمدی نیک',
                    skill: 'logo-design',
                    is_opensource: false,
                    thumbnail_file: 'nima-visitcard-front1.png',
                    gallery: ['nima-visitcard-front1.png'],
                    description: 'طراحی ست لوگو، کارت ویزیت و سربرگ برای کاردرمانی نیما احمدی نیک',
                    tools: ['adobe-illustrator'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'nima-visitcard',
                    title: 'کارت ویزیت کاردرمانی نیما احمدی نیک',
                    skill: 'visitcard-design',
                    is_opensource: false,
                    thumbnail_file: 'nima-visitcard-front2.png',
                    gallery: ['nima-visitcard-front1.png', 'nima-visitcard-front2.png', 'nima-visitcard-back.png'],
                    description: 'طراحی ست لوگو، کارت ویزیت و سربرگ برای کاردرمانی نیما احمدی نیک',
                    tools: ['adobe-photoshop'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'radiology-skums-logo',
                    title: 'لوگوی انجمن علمی رادیولوژی دانشگاه علوم پزشکی شهرکرد',
                    skill: 'logo-design',
                    is_opensource: false,
                    thumbnail_file: 'logo-radiology-skums-cover.png',
                    gallery: ['logo-radiology-skums.png'],
                    description: 'طراحی لوگوی انجمن علمی رادیولوژی دانشگاه علوم پزشکی شهرکرد با الهام از لوگوی اصلی دانشگاه و نماد رادیواکتیو',
                    tools: ['adobe-illustrator'],
                    status: 'اتود اولیه',
                    link_url: 'ندارد'
                },
                {
                    id: 'mci-app-ui',
                    title: 'بازطراحی رابط کاربری اپلیکیشن همراه من (غیر رسمی)',
                    skill: 'ui-design',
                    is_opensource: false,
                    thumbnail_file: 'mci-redesign1.png',
                    gallery: ['mci-redesign1.png', 'mci-redesign2.png', 'mci-redesign3.png'],
                    description: 'بازطراحی رابط کاربری اپلیکیشن همراه من به صورت غیر رسمی (چالش طراحی رابط کاربری پادکست موز)',
                    tools: ['adobe-photoshop', 'adobe-xd'],
                    status: 'غیرفعال',
                    link_url: 'https://instagram.com/mowzpodcast'
                },
                {
                    id: 'labkhand-argan-banner',
                    title: 'لیست قیمت روغن آرگان لبخند',
                    skill: 'banner-design',
                    is_opensource: false,
                    thumbnail_file: 'labkhand-argan-price1.png',
                    gallery: ['labkhand-argan-price1.png', 'labkhand-argan-price2.png'],
                    description: 'طراحی لیست قیمت برای روغن آرگان',
                    tools: ['adobe-photoshop', 'adobe-illustrator'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'fkz-warranty-card',
                    title: 'کارت گارانتی فرزین کوشای زردکوه',
                    skill: 'visitcard-design',
                    is_opensource: false,
                    thumbnail_file: 'fkz-warranty-card-front.png',
                    gallery: ['fkz-warranty-card-front.png', 'fkz-warranty-card-back.png'],
                    description: 'طراحی کارت گارانتی تلفن همراه برای شرکت فرزین کوشای زردکوه',
                    tools: ['adobe-photoshop', 'adobe-illustrator'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'ardeshir-raisi-election-banner',
                    title: 'بنر انتخاباتی اردشیر رئیسی',
                    skill: 'banner-design',
                    is_opensource: false,
                    thumbnail_file: 'ardeshir-raisi-election-banner.png',
                    gallery: ['ardeshir-raisi-election-banner.png'],
                    description: 'طراحی بنر انتخاباتی اردشیر رئیسی برای انتخابات مجلس 98',
                    tools: ['adobe-photoshop'],
                    status: 'پایان یافته',
                    link_url: 'ندارد'
                },
                {
                    id: 'pedram-logo',
                    title: 'لوگوی پدرام',
                    skill: 'logo-design',
                    is_opensource: false,
                    thumbnail_file: 'pedram-logo.png',
                    gallery: ['pedram-logo.png'],
                    description: 'طراحی لوگوتایپ پدرام / Pedram',
                    tools: ['adobe-illustrator'],
                    status: 'اتود اولیه',
                    link_url: 'ندارد'
                },
                {
                    id: 'fkz-visitcard',
                    title: 'کارت ویزیت فرزین کوشای زردکوه',
                    skill: 'visitcard-design',
                    is_opensource: false,
                    thumbnail_file: 'fkz-visitcard-front.png',
                    gallery: ['fkz-visitcard-front.png', 'fkz-visitcard-back.png'],
                    description: 'طراحی کارت ویزیت شرکت فرزین کوشای زردکوه',
                    tools: ['adobe-photoshop'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                },
                {
                    id: 'vgtel-visitcard',
                    title: 'کارت ویزیت ویجی تل',
                    skill: 'visitcard-design',
                    is_opensource: false,
                    thumbnail_file: 'vgtel-card-front.png',
                    gallery: ['vgtel-card-front.png', 'vgtel-card-back.png'],
                    description: 'طراحی کارت ویزیت فروشگاه ویجی تل',
                    tools: ['adobe-photoshop'],
                    status: 'غیرفعال',
                    link_url: 'ندارد'
                }
            ]
        }
    },

    getters: {

        getActivePortfolioSkill: (state) => (skill) => {
            if(skill){
                for(const currentSkill of state.skills){
                    if(currentSkill.id == skill){
                        return skill;
                    }
                }
                return 'invalid';
            }else{
                return 'all';
            }
        },

        getSkillName: (state) => (skillId) => {
            return state.skills.find(foundSkill => foundSkill.id == skillId).name;
        },

        getFilteredPortfolios: (state) => (skillId) => {
            if(skillId == "all"){
                return state.portfolios;
            }else{
                return state.portfolios.filter(portfolio => portfolio.skill == skillId);
            }
        }

    }

});
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
                    id: 'hamekara-banner',
                    title: 'بنرهای همه کارا',
                    skill: 'banner-design',
                    is_opensource: false,
                    pic_url: 'hamekara-square-banner.png',
                    gallery: ['hamekara-square-banner.png', 'hamekara-app-banner1.png', 'hamekara-app-banner2.png', 'hamekara-app-banner3.png', 'hamekara-form.png'],
                    description: 'طراحی بنر برای مجموعه «همه کارا» در قالب بنرهای تبلیغاتی درون اپلیکیشن، بنرهای تبلیغاتی برای مجلات چاپی و فرم اداره پست',
                    tools: ['adobe-photoshop', 'adobe-illustrator'],
                    status: 'فعال',
                    link_url: 'https://hamekara.com'
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
        }

    }

});
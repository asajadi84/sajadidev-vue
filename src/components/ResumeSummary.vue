<template>
    <section class="container-fluid container--primary">
        <div class="container summary">
            <div class="d-flex flex-row flex-wrap align-items-center summary__header">
                <img src="@/assets/icons/file-account.svg" width="48">
                <h2 class="summary__title">خلاصه رزومه</h2>
                <v-btn to="/resume" variant="text" size="x-large" density="compact" class="ms-auto">مشاهده کامل ></v-btn>
            </div>
            <ul>
                <li>بیش از 9 سال سابقه در برنامه‌نویسی در قالب نرم‌افزارهای تحت وب، اپلیکیشن‌های اندرویدی و بازی‌سازی</li>
                <li>تسلط به نرم‌افزارهای گرافیک و موشن به منظور طراحی جنبه‌های بصری پروژه‌ها</li>
                <li>کارشناسی مهندسی نرم‌افزار و کارشناسی ارشد آموزش زبان انگلیسی</li>
            </ul>
        </div>
    </section>
</template>

<style>

.summary {
    background-color: var(--primary-dark);
    border-top-left-radius: 96px;
    border-top-right-radius: 96px;
    color: var(--white);
    padding: 64px 80px !important;
}

.summary__header {
    margin-bottom: 24px;
}

.summary__title {
    color: var(--secondary);
    margin-bottom: 0;
    margin-right: 8px;
}

@media (max-width: 1200px) {

    .summary {
        padding: 64px 24px !important;
    }
    
}

</style>
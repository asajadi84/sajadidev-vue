<template>
    <section class="container-fluid container--primary">
        <div class="container summary">
            <div class="d-flex flex-row flex-wrap align-items-center summary__header">
                <img src="@/assets/icons/file-account.svg" width="48">
                <h2 class="summary__title">خلاصه رزومه</h2>
                <router-link to="/resume" class="ms-auto summary__link">مشاهده کامل ></router-link>
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

.summary__link, .summary__link:hover {
    color: var(--white);
    font-size: 1.25rem;
}

</style>
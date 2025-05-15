<template>
    <header class="absolute top w-full flex justify-center blurred-navbar text-white px-5 md:px-14 2xl:px-0">
        <nav class="w-full max-w-2xl xl:max-w-xl py-2 flex flex-row justify-between items-center">
            <div class="logo w-32 xl:w-40">
                <RouterLink to="/">
                    <img src="/assets/img/logo.png" alt="">
                </RouterLink>
            </div>
            <div class="hidden md:flex flex-row gap-8">
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-md">HOME</p>
                </RouterLink>
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-md">BSPORTS</p>
                </RouterLink>
                <RouterLink to="/careers" class="navbar-menu">
                    <p class="text-sm xl:text-md">CAREERS</p>
                </RouterLink>
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-md">CONTACT US</p>
                </RouterLink>
            </div>
            <div class="md:hidden">
                <svg class="cursor-pointer" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H17M4 7H17M7 13H17" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </nav>
    </header>
</template>
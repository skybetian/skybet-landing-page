<template>
    <div class="absolute top w-full flex justify-center blurred-navbar text-white px-5 md:px-14 2xl:px-18 3xl:px-0">
        <div class="w-full max-w-2xl py-2 flex flex-row justify-between items-center">
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
                <img src="/assets/img/icons/menu.png" alt="menu bar" class="cursor-pointer">
            </div> 
        </div>
    </div>
</template>
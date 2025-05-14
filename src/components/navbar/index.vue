<template>
    <div class="absolute top w-full flex justify-center text-white px-14 xl:px-0">
        <div class="w-full max-w-2xl pt-3 flex flex-row justify-between items-center">
            <div class="logo w-32 xl:w-48">
                <RouterLink to="/">
                    <img src="/assets/img/logo.png" alt="">
                </RouterLink>
            </div>
            <div class="flex flex-row gap-8">
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-lg">HOME</p>
                </RouterLink>
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-lg">BSPORTS</p>
                </RouterLink>
                <RouterLink to="/careers" class="navbar-menu">
                    <p class="text-sm xl:text-lg">CAREERS</p>
                </RouterLink>
                <RouterLink to="/" class="navbar-menu">
                    <p class="text-sm xl:text-lg">CONTACT US</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
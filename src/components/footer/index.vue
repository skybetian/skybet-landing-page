<template>
    <div class="w-full flex items-center justify-center bg-black text-white px-5 md:px-14 2xl:px-18 3xl:px-0">
        <div class="w-full max-w-2xl py-12">
            <div class="w-full flex flex-col lg:flex-row justify-between items-center">
                <div class="logo w-full lg:w-72 flex flex-col items-center justify-center lg:block">
                    <RouterLink to="/">
                        <img src="/assets/img/logo.png" alt="">
                    </RouterLink>
                    <p class="text-sm text-center lg:text-start">Your privacy matters to us. We collect minimal data necessary to provide our
                        services and do not
                        share your information with third parties unless required by law. For more details, please
                        review our full Privacy Policy.</p>
                </div>
                <div class="flex h-full my-10 lg:mt-0 flex-col md:flex-row gap-4 lg:gap-8 items-center">
                    <RouterLink to="/" class="navbar-menu w-fit">
                        <p class="text-sm">HOME</p>
                    </RouterLink>
                    <RouterLink to="/" class="navbar-menu w-fit">
                        <p class="text-sm">BSPORTS</p>
                    </RouterLink>
                    <RouterLink to="/careers" class="navbar-menu w-fit">
                        <p class="text-sm">CAREERS</p>
                    </RouterLink>
                    <RouterLink to="/" class="navbar-menu w-fit">
                        <p class="text-sm">CONTACT US</p>
                    </RouterLink>
                </div>
                <div class="space-y-5">
                    <div class="w-full flex flex-row justify-center gap-5">
                        <RouterLink to="/">
                            <img src="/assets/img/socials/facebook.png" alt="">
                        </RouterLink>
                        <RouterLink to="/">
                            <img src="/assets/img/socials/linkedin.png" alt="">
                        </RouterLink>
                    </div>
                    <p class="text-sm text-center lg:text-start uppercase">© 2025 Skbetgamingcorporation. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</template>
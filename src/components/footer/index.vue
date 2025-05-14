<template>
    <div class="w-full flex items-center justify-center bg-black text-white">
        <div class="w-full max-w-2xl py-12">
            <div class="w-full flex flex-row justify-between items-center">
                <div class="logo w-72">
                    <RouterLink to="/">
                        <img src="/assets/img/logo.png" alt="">
                    </RouterLink>
                    <p class="text-sm">Your privacy matters to us. We collect minimal data necessary to provide our
                        services and do not
                        share your information with third parties unless required by law. For more details, please
                        review our full Privacy Policy.</p>
                </div>
                <div class="flex h-full flex-row gap-8">
                    <RouterLink to="/" class="navbar-menu">
                        <p class="text-sm">HOME</p>
                    </RouterLink>
                    <RouterLink to="/" class="navbar-menu">
                        <p class="text-sm">BSPORTS</p>
                    </RouterLink>
                    <RouterLink to="/careers" class="navbar-menu">
                        <p class="text-sm">CAREERS</p>
                    </RouterLink>
                    <RouterLink to="/" class="navbar-menu">
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
                    <p class="text-sm uppercase">© 2025 Skbetgamingcorporation. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</template>
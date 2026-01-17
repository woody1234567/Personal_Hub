<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 selection:bg-primary-500/30"
  >
    <header
      class="sticky top-4 z-50 mx-4 mb-8 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <UContainer class="flex items-center justify-between h-14">
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <UAvatar
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
              alt="Avatar"
              size="xs"
              class="ring-2 ring-primary-500/20 group-hover:ring-primary-500 transition-all duration-300"
            />
            <span
              class="font-bold text-gray-900 dark:text-white text-base hidden sm:block group-hover:text-primary-500 transition-colors"
              >Personal Hub</span
            >
          </NuxtLink>

          <UNavigationMenu :items="navItems" variant="link" />
        </div>

        <div class="flex items-center gap-1">
          <UDropdownMenu
            :items="languageItems"
            :popper="{ placement: 'bottom-end' }"
          >
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-language"
              label="EN"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              size="xs"
              class="hidden sm:flex"
            />
          </UDropdownMenu>

          <UDropdownMenu
            :items="languageItems"
            :popper="{ placement: 'bottom-end' }"
          >
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-language"
              size="xs"
              class="sm:hidden"
            />
          </UDropdownMenu>

          <ClientOnly>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="neutral"
              variant="ghost"
              aria-label="Theme"
              size="xs"
              @click="isDark = !isDark"
            />
            <template #fallback>
              <div class="w-7 h-7" />
            </template>
          </ClientOnly>
        </div>
      </UContainer>
    </header>

    <slot />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const switchLocalePath = useSwitchLocalePath();

const navItems = computed(() => [
  {
    label: $t("nav.home"), // Text labels for navigation usually need $t inside computed if reactive
    icon: "i-heroicons-home",
    to: "/",
  },
]);

const languageItems = computed(() => [
  [
    {
      label: "English",
      icon: "i-heroicons-flag-usa-20-solid",
      to: switchLocalePath("en"),
    },
  ],
  [
    {
      label: "中文 (Traditional)",
      click: () => {}, // empty click handler to prevent error if click is expected, but 'to' should take precedence in UDropdown items
      to: switchLocalePath("zhTW"),
    },
  ],
]);
</script>

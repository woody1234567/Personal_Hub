<template>
  <section
    class="py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16"
  >
    <!-- Avatar / Image Section -->
    <div class="relative group">
      <div
        class="absolute -inset-1 bg-gradient-to-r from-primary-400 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
      ></div>
      <UAvatar
        src="https://github.com/woody1234567/woody1234567/blob/main/images/personal_pic.png?raw=true"
        alt="User Avatar"
        size="3xl"
        class="relative ring-4 ring-gray-100 dark:ring-gray-800 w-48 h-48 md:w-64 md:h-64"
        :ui="{ rounded: 'rounded-full' }"
      />
    </div>

    <!-- Text Content Section -->
    <div class="text-center md:text-left flex-1 space-y-6">
      <div class="space-y-2">
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ $t("hero.greeting") }} <span class="text-primary-500"> Woody</span>
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light"
        >
          {{ $t("hero.role") }}
        </p>
      </div>

      <p
        class="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0"
      >
        {{ $t("hero.description") }}
      </p>

      <!-- Social / Contact Links -->
      <div class="flex flex-wrap justify-center md:justify-start gap-4">
        <UButton
          icon="i-heroicons-envelope"
          color="neutral"
          variant="ghost"
          :label="$t('hero.contact')"
          size="lg"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/woody1234567"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/chun-wei-hsu19990703/"
          target="_blank"
          aria-label="LinkedIn"
        />
        <UButton
          icon="i-simple-icons-youtube"
          color="neutral"
          variant="ghost"
          to="https://www.youtube.com/@Woodyhsu-vlog"
          target="_blank"
          aria-label="youtube"
        />
      </div>
    </div>
  </section>
</template>

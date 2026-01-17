<template>
  <section class="py-12">
    <div class="flex items-center justify-between mb-8">
      <h2
        class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
      >
        <UIcon name="i-heroicons-rectangle-stack" class="text-primary-500" />
        {{ $t("showcase.title") }}
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="item in links"
        :key="item.title"
        :to="item.url"
        target="_blank"
        class="group relative"
      >
        <UCard
          :ui="{
            body: { padding: 'p-0' },
            ring: 'ring-1 ring-gray-200 dark:ring-gray-800 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50 transition-all duration-300',
            shadow: 'shadow-sm group-hover:shadow-md',
          }"
          class="h-full transition-all duration-300 overflow-hidden"
        >
          <div class="p-6 space-y-4">
            <div class="flex items-start justify-between">
              <div
                class="p-2 bg-primary-50 dark:bg-primary-900/10 rounded-lg text-primary-500 group-hover:scale-110 transition-transform duration-300"
              >
                <UIcon :name="item.icon" class="w-8 h-8" />
              </div>
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors"
              />
            </div>

            <div>
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors"
              >
                {{ item.title }}
              </h3>
              <p
                class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
              >
                {{ item.description }}
              </p>
            </div>
          </div>

          <div
            class="h-1 w-full bg-gradient-to-r from-transparent via-primary-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          ></div>
        </UCard>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const links = computed(() => [
  {
    title: t("showcase.tech_blog"),
    description: t("showcase.tech_blog_desc"),
    url: "https://techblog.studywithwoody.site",
    icon: "i-heroicons-book-open",
  },
  {
    title: t("showcase.teaching"),
    description: t("showcase.teaching_desc"),
    url: "https://tutorai.studywithwoody.site",
    icon: "i-heroicons-academic-cap",
  },
  {
    title: t("showcase.cosmology"),
    description: t("showcase.cosmology_desc"),
    url: "https://cosmology.studywithwoody.site",
    icon: "i-heroicons:sparkles-solid",
  },
  {
    title: t("showcase.architecture"),
    description: t("showcase.architecture_desc"),
    url: "https://architecture.studywithwoody.site",
    icon: "i-heroicons:building-office",
  },
  {
    title: t("showcase.investment"),
    description: t("showcase.investment_desc"),
    url: "https://investment.studywithwoody.site",
    icon: "i-heroicons:presentation-chart-line",
  },
]);
</script>

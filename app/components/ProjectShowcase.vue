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
        v-for="item in projects"
        :id="`project-${item.slug}`"
        :key="item.title"
        :to="`${item.url}`"
        target="_blank"
        class="group relative scroll-mt-24"
      >
        <UCard
          :ui="{ body: 'p-0' }"
          class="h-full transition-all duration-300 overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50 shadow-sm group-hover:shadow-md"
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
          />
        </UCard>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { projects } = useProjects();
</script>

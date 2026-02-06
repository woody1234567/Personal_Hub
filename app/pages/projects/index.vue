<template>
  <UContainer class="py-12">
    <div class="mb-12 text-center">
      <h1
        class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400"
      >
        {{ $t("nav.projects") }}
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ $t("hero.description") }}
      </p>
    </div>

    <ProjectShowcase />
  </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Projects - Personal Hub",
  description:
    "Explore my latest projects, technical tutorials, and learning resources.",
});
</script>

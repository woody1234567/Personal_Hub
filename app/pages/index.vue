<template>
  <div>
    <UContainer>
      <main class="space-y-12 pb-24">
        <AppHero />
      </main>

      <footer
        class="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} StudyWithWoody. All rights
          reserved.
        </p>
      </footer>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Woody | Personal Hub",
  meta: [
    {
      name: "description",
      content: "Personal hub leading to my personal projects.",
    },
  ],
});
</script>

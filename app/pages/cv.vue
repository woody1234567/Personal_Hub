<template>
  <UContainer class="py-12 max-w-4xl">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
      <UAvatar
        src="https://github.com/woody1234567/woody1234567/blob/main/images/pyramid_avatar.png?raw=true"
        alt="Chun-Wei, Hsu"
        size="3xl"
        class="ring-4 ring-primary-500/20 shadow-xl"
      />
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Chun-Wei, Hsu
        </h1>
        <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          <UBadge
            v-for="(role, index) in roles"
            :key="index"
            :color="index === 0 ? 'primary' : 'neutral'"
            variant="subtle"
          >
            {{ rt(role) }}
          </UBadge>
        </div>
        <div
          class="flex flex-wrap justify-center md:justify-start gap-1 text-sm text-gray-600 dark:text-gray-400"
        >
          <UButton
            icon="i-heroicons-envelope"
            variant="ghost"
            color="neutral"
            to="mailto:johannes8873@gmail.com"
            label="Email"
            size="sm"
          />
          <UButton
            icon="i-heroicons-phone"
            variant="ghost"
            color="neutral"
            label="+886 908109372"
            size="sm"
          />
          <UButton
            icon="i-heroicons-globe-alt"
            variant="ghost"
            color="neutral"
            to="https://www.studywithwoody.site/"
            label="Website"
            target="_blank"
            size="sm"
          />
          <UButton
            icon="i-heroicons-link"
            variant="ghost"
            color="neutral"
            to="https://github.com/woody1234567"
            label="GitHub"
            target="_blank"
            size="sm"
          />
          <UButton
            icon="i-heroicons-link"
            variant="ghost"
            color="neutral"
            to="https://www.linkedin.com/in/chun-wei-hsu19990703/"
            label="LinkedIn"
            target="_blank"
            size="sm"
          />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Left Column: Experience & Education -->
      <div class="md:col-span-2 space-y-12">
        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-briefcase" class="text-primary-500" />
            {{ $t("cv.experience") }}
          </h2>
          <UTimeline :items="experienceItems">
            <template #description="{ item }">
              <ul
                v-if="Array.isArray(item.description)"
                class="list-disc list-inside space-y-1"
              >
                <li v-for="(line, index) in item.description" :key="index">
                  {{ rt(line) }}
                </li>
              </ul>
              <span v-else>{{ item.description }}</span>
            </template>
          </UTimeline>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-academic-cap" class="text-primary-500" />
            {{ $t("cv.education") }}
          </h2>
          <UTimeline :items="educationItems">
            <template #description="{ item }">
              <ul
                v-if="Array.isArray(item.description)"
                class="list-disc list-inside space-y-1"
              >
                <li v-for="(line, index) in item.description" :key="index">
                  {{ rt(line) }}
                </li>
              </ul>
              <span v-else>{{ item.description }}</span>
            </template>
          </UTimeline>
        </section>
      </div>

      <!-- Right Column: Skills & Projects -->
      <div class="space-y-8">
        <section>
          <UCard>
            <template #header>
              <h3 class="font-bold flex items-center gap-2">
                <UIcon
                  name="i-heroicons-wrench-screwdriver"
                  class="text-primary-500"
                />
                {{ $t("cv.skills") }}
              </h3>
            </template>
            <div class="space-y-4">
              <div v-for="(skills, category) in skillGroups" :key="category">
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5"
                >
                  {{ category }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <UBadge
                    v-for="skill in skills"
                    :key="skill"
                    variant="soft"
                    size="sm"
                    color="neutral"
                    >{{ skill }}</UBadge
                  >
                </div>
              </div>
            </div>
          </UCard>
        </section>

        <section>
          <UCard>
            <template #header>
              <h3 class="font-bold flex items-center gap-2">
                <UIcon name="i-heroicons-language" class="text-primary-500" />
                {{ $t("cv.languages") }}
              </h3>
            </template>
            <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>{{ $t("cv.lang_items.english") }}</li>
              <li>{{ $t("cv.lang_items.mandarin") }}</li>
            </ul>
          </UCard>
        </section>

        <section>
          <UCard>
            <template #header>
              <h3 class="font-bold flex items-center gap-2">
                <UIcon
                  name="i-heroicons-rocket-launch"
                  class="text-primary-500"
                />
                {{ $t("cv.featured_projects") }}
              </h3>
            </template>
            <div class="space-y-6">
              <div v-for="project in projects" :key="project.title">
                <h4 class="font-bold text-sm">{{ project.title }}</h4>
                <p
                  class="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-3 leading-relaxed"
                >
                  {{ project.description }}
                </p>
                <UButton
                  :to="project.url"
                  variant="link"
                  color="primary"
                  size="xs"
                  class="px-0 mt-1"
                  target="_blank"
                  icon="i-heroicons-arrow-top-right-on-square-20-solid"
                  trailing
                  >{{ $t("cv.view_site") }}</UButton
                >
              </div>
            </div>
          </UCard>
        </section>

        <section>
          <UCard>
            <template #header>
              <h3 class="font-bold flex items-center gap-2">
                <UIcon name="i-heroicons-light-bulb" class="text-primary-500" />
                {{ $t("cv.domain_knowledge") }}
              </h3>
            </template>
            <div class="flex flex-wrap gap-1.5">
              <UBadge
                v-for="domain in domainKnowledge"
                :key="domain"
                variant="subtle"
                size="sm"
                color="primary"
                >{{ domain }}</UBadge
              >
            </div>
          </UCard>
        </section>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

const roles = computed(() => tm("cv.roles") as string[]);

const experienceItems = computed(() => [
  {
    date: "2022.2 ~ 2022.5",
    title: t("cv.exp_items.funnow.title"),
    description: tm("cv.exp_items.funnow.desc") as string[],
    icon: "heroicons:chart-bar-square",
  },
  {
    date: "2021.9 ~ 2022.6",
    title: t("cv.exp_items.ntudac.title"),
    description: tm("cv.exp_items.ntudac.desc") as string[],
    icon: "heroicons:user-16-solid",
  },
  {
    date: "2021.6 - 2021.8",
    title: t("cv.exp_items.sinica.title"),
    description: tm("cv.exp_items.sinica.desc") as string[],
    icon: "heroicons:rocket-launch",
  },
]);

const educationItems = computed(() => [
  {
    date: "2024.9 - 2025.3",
    title: t("cv.edu_items.hamburg.title"),
    description: tm("cv.edu_items.hamburg.desc") as string[],
    icon: "i-heroicons-academic-cap",
  },
  {
    date: "2022.9 ~ 2025.7",
    title: t("cv.edu_items.ntu_ms.title"),
    description: tm("cv.edu_items.ntu_ms.desc") as string[],
    icon: "i-heroicons-academic-cap",
  },
  {
    date: "2017.9 - 2022.6",
    title: t("cv.edu_items.ntu_bs.title"),
    description: tm("cv.edu_items.ntu_bs.desc") as string[],
    icon: "i-heroicons-academic-cap",
  },
]);

// Skills kept static as they are proper nouns
const skillGroups = {
  "AI Tools": ["Claude code", "antigravity", "openclaw"],
  Technical: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy"],
  Database: ["MySQL", "PostgreSQL"],
  Web: ["Vue", "Nuxt", "Typescript", "ThreeJS"],
  Visualization: ["Tableau", "Matplotlib", "PlotJS"],
  Deployment: ["Vercel", "Docker", "Railway"],
};

const domainKnowledge = computed(() => [
  t("cv.domains.analysis"),
  t("cv.domains.viz"),
  t("cv.domains.ml"),
  t("cv.domains.econ"),
  t("cv.domains.stats"),
  t("cv.domains.physics"),
]);

const projects = computed(() => [
  {
    title: t("cv.projects.physim.title"),
    description: t("cv.projects.physim.desc"),
    url: "https://physimhub.studywithwoody.site/",
  },
  {
    title: t("cv.projects.tech_blog.title"),
    description: t("cv.projects.tech_blog.desc"),
    url: "https://techblog.studywithwoody.site/",
  },
  {
    title: t("cv.projects.tutor_ai.title"),
    description: t("cv.projects.tutor_ai.desc"),
    url: "https://tutorai.studywithwoody.site/",
  },
]);

useSeoMeta({
  title: t("cv.title") + " | Chun-Wei, Hsu",
  description: t("cv.meta_description"),
});
</script>

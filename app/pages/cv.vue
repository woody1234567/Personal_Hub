<template>
  <UContainer class="py-12 max-w-4xl">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
      <UAvatar
        src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
        alt="Chun-Wei, Hsu"
        size="3xl"
        class="ring-4 ring-primary-500/20 shadow-xl"
      />
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Chun-Wei, Hsu
        </h1>
        <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
          <UBadge color="primary" variant="subtle">Data Scientist</UBadge>
          <UBadge color="neutral" variant="subtle">Economics & Physics</UBadge>
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
            Professional Experience
          </h2>
          <UTimeline :items="experienceItems" />
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-academic-cap" class="text-primary-500" />
            Education
          </h2>
          <UTimeline :items="educationItems" />
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
                Technical Skills
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
                Languages
              </h3>
            </template>
            <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>English (TOEFL 93, TOEIC 945)</li>
              <li>Mandarin (Native)</li>
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
                Featured Projects
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
                  >View Site</UButton
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
                Domain Knowledge
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
const experienceItems = [
  {
    date: "2022.2 ~ 2022.5",
    title: "Data Analyst | FunNow co.",
    description:
      "Assisted FunNow in analyzing the post-pandemic development strategy for food delivery and takeaway services. Helped strike a 30% higher cooperation rate with local food businesses by generating a recommended list of potential partner businesses using random forest and decision tree models.",
  },
  {
    date: "2021.9 ~ 2022.6",
    title: "NTUDAC Club member | NTU Data Analytics Club",
    description:
      "Performed data analysis using SQL, Python, and Tableau, and built machine learning models with scikit-learn for real-world datasets. Collaborated on industry-sponsored data projects, delivering data-driven insights through analytical workflows.",
  },
  {
    date: "2021.6 - 2021.8",
    title: "Summer Internship | Academia Sinica",
    description:
      "Assist the supervising professor in exploring cosmology packages in Python, such as CAMB. Construct a ΛCDM cosmological model and investigate how the abundance of dark matter in the early universe influences baryon acoustic oscillations (BAO).",
  },
];

const educationItems = [
  {
    date: "2024.9 - 2025.3",
    title: "Universität Hamburg",
    description:
      "Exchange student, Socioeconomics Master's degree. Relevant Courses: Computational Economics, International Finance and Investment.",
  },
  {
    date: "2022.9 ~ 2024.7",
    title: "National Taiwan University",
    description:
      "Master of Science in Economics. GPA: 3.9 / 4.3. Research Field: Macroeconomics. Relevant Courses: Computational Methods for Econometrics, Data Science and Social Inquiry, Econometric Theory. Scholarship: 112 Shanghai Commercial and Savings Bank scholarship.",
  },
  {
    date: "2017.9 - 2022.6",
    title: "National Taiwan University",
    description:
      "Bachelor of Science in Physics with minor in Economics. Relevant Courses: Coding for Physics Simulation, Introduction to Numerical Analysis. Award: 2nd in 2022 DATA IDEATHON competition, 2019 NTU Student Social Contribution Special Award.",
  },
];

const skillGroups = {
  Technical: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy"],
  Database: ["MySQL", "PostgreSQL"],
  Web: ["Vue", "Nuxt", "Typescript", "ThreeJS"],
  Visualization: ["Tableau", "Matplotlib", "PlotJS"],
  Deployment: ["Vercel", "Docker", "Railway"],
};

const domainKnowledge = [
  "Data Analysis",
  "Data Visualization",
  "Machine Learning",
  "Economic Modeling",
  "Statistics",
  "Physics",
];

const projects = [
  {
    title: "Tutor AI",
    description:
      "Developed an digital learning platform that enables parents to monitor students’ learning progress in real time, while providing students with a 24/7 AI-powered digital tutor.",
    url: "https://tutorai.studywithwoody.site/",
  },
  {
    title: "Tech blog",
    description:
      "My tech blog focused on Vue, Nuxt, Python, and AI, sharing my learning notes during development, and practical web development tips.",
    url: "https://techblog.studywithwoody.site/",
  },
  {
    title: "PhysimHub",
    description:
      "Developed an interactive physics simulation website that supports teachers in instruction through real-time web-based interactions.",
    url: "https://physimhub.studywithwoody.site/",
  },
];

useSeoMeta({
  title: "CV | Chun-Wei, Hsu",
  description:
    "Data Scientist and Economics/Physics background. Portfolio and resume of Chun-Wei, Hsu.",
});
</script>

export interface Project {
  slug: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const useProjects = () => {
  const { t } = useI18n();

  const projects = computed<Project[]>(() => [
    {
      slug: "tech-blog",
      title: t("showcase.tech_blog"),
      description: t("showcase.tech_blog_desc"),
      url: "https://techblog.studywithwoody.com",
      icon: "i-heroicons-book-open",
    },
    {
      slug: "ai-tutor",
      title: t("showcase.teaching"),
      description: t("showcase.teaching_desc"),
      url: "https://aitutor.studywithwoody.com",
      icon: "i-heroicons-academic-cap",
    },
    {
      slug: "cosmology",
      title: t("showcase.cosmology"),
      description: t("showcase.cosmology_desc"),
      url: "https://cosmology.studywithwoody.com",
      icon: "i-heroicons:sparkles-solid",
    },
    {
      slug: "architecture",
      title: t("showcase.architecture"),
      description: t("showcase.architecture_desc"),
      url: "https://architecture.studywithwoody.com",
      icon: "i-heroicons:building-office",
    },
    {
      slug: "investment",
      title: t("showcase.investment"),
      description: t("showcase.investment_desc"),
      url: "https://investment.studywithwoody.com",
      icon: "i-heroicons:presentation-chart-line",
    },
    {
      slug: "physim-hub",
      title: t("showcase.Physim"),
      description: t("showcase.Physim_desc"),
      url: "https://physimhub.studywithwoody.com",
      icon: "i-heroicons:academic-cap",
    },
    {
      slug: "tutoring",
      title: t("showcase.tutoring"),
      description: t("showcase.tutoring_desc"),
      url: "https://tutorad.studywithwoody.com",
      icon: "i-heroicons:academic-cap",
    },
    {
      slug: "slides",
      title: t("showcase.slides"),
      description: t("showcase.slides_desc"),
      url: "https://slides.studywithwoody.com",
      icon: "i-heroicons:presentation-chart-line",
    }
  ]);

  return {
    projects,
  };
};

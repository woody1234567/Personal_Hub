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
      url: "https://woodytechblog.studywithwoody.site/",
      icon: "i-heroicons-book-open",
    },
    {
      slug: "tutor-ai",
      title: t("showcase.teaching"),
      description: t("showcase.teaching_desc"),
      url: "https://tutorai.studywithwoody.site",
      icon: "i-heroicons-academic-cap",
    },
    {
      slug: "cosmology",
      title: t("showcase.cosmology"),
      description: t("showcase.cosmology_desc"),
      url: "https://cosmology.studywithwoody.site",
      icon: "i-heroicons:sparkles-solid",
    },
    {
      slug: "architecture",
      title: t("showcase.architecture"),
      description: t("showcase.architecture_desc"),
      url: "https://architecture.studywithwoody.site",
      icon: "i-heroicons:building-office",
    },
    {
      slug: "investment",
      title: t("showcase.investment"),
      description: t("showcase.investment_desc"),
      url: "https://investment.studywithwoody.site",
      icon: "i-heroicons:presentation-chart-line",
    },
    {
      slug: "physim-hub",
      title: t("showcase.Physim"),
      description: t("showcase.Physim_desc"),
      url: "https://physimhub.studywithwoody.site",
      icon: "i-heroicons:academic-cap",
    },
    {
      slug: "tutoring",
      title: t("showcase.tutoring"),
      description: t("showcase.tutoring_desc"),
      url: "https://tutoring.ad.studywithwoody.site",
      icon: "i-heroicons:academic-cap",
    },
  ]);

  return {
    projects,
  };
};

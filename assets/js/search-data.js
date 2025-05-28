// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-shashank-pandey",
    title: "Shashank Pandey",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "A list of my current publications! (well, publication)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "These are the courses/topics I have taught (so far).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Download my latest resume as a PDF below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-teaching-assistant-for-cs-f222-served-as-part-of-the-course-team-for-the-discrete-structures-in-computer-science-course-at-bits-under-prof-venkat-ramaswamy",
          title: 'Teaching Assistant for CS F222: Served as part of the course team for...',
          description: "",
          section: "News",},{id: "news-data-scientist-intern-at-paypal-part-of-the-global-fraud-solutions-team-in-the-global-analytics-and-data-science-division",
          title: 'Data Scientist Intern at PayPal: Part of the Global Fraud Solutions team, in...',
          description: "",
          section: "News",},{id: "news-software-engineer-intern-at-the-indian-institute-of-science-at-the-center-of-data-for-public-good",
          title: 'Software Engineer Intern at the Indian Institute of Science: At the Center of...',
          description: "",
          section: "News",},{id: "news-graduated-from-bits-pilani-hyderabad-finished-my-bachelors-in-computer-science-degree-along-with-a-minor-in-data-science-graduated-in-the-first-division",
          title: 'Graduated from BITS Pilani, Hyderabad. Finished my Bachelors in Computer Science degree, along...',
          description: "",
          section: "News",},{id: "news-teaching-assistant-for-csci-ua-0469-served-as-part-of-the-course-team-for-the-natural-language-processing-course-at-nyu-under-prof-adam-meyers",
          title: 'Teaching Assistant for CSCI-UA 0469: Served as part of the course team for...',
          description: "",
          section: "News",},{id: "news-data-scientist-intern-at-dynpro-currently-developing-tools-for-the-company-s-internal-data-analytics-platform",
          title: 'Data Scientist Intern at DynPro Currently developing tools for the company’s internal data...',
          description: "",
          section: "News",},{id: "news-m-s-in-computer-science-at-nyu-currently-pursuing-my-master-s-degree-in-computer-science-at-the-tandon-school-of-engineering",
          title: 'M.S. in Computer Science at NYU Currently pursuing my Master’s Degree in Computer...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

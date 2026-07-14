export const projectsData = [
  {
    title: 'SQLMesh Open Source Contributions',
    company: 'SQLMesh Community',
    description: 'Active contributor to SQLMesh, a modern data transformation framework',
    problem:
      'SQLMesh needed performance optimizations and enterprise integration patterns to handle real-world data workflows at scale.',
    architecture:
      'Analyzed SQLMesh core codebase and identified optimization opportunities in query planning, execution, and state management.',
    approach:
      'Submitted pull requests addressing performance bottlenecks, improving error handling, and enhancing documentation. Participated in design discussions and code reviews.',
    challenges:
      'Understanding complex query optimization internals, ensuring backward compatibility, and aligning changes with project vision.',
    results: [
      'Multiple merged pull requests improving framework performance',
      'Enhanced user experience through better error messages and documentation',
      'Contributed to ecosystem adoption in enterprise data platforms',
      'Established presence in modern data engineering community',
    ],
    technologies: ['Python', 'SQLMesh', 'Git', 'Testing', 'Documentation'],
    lessonLearned:
      'Open-source contribution accelerates learning. Engaging with the community, code reviews, and solving real problems builds expertise faster than working in isolation. Starting with vehicle data analysis in Excel taught me that strong fundamentals in data thinking matter more than the tools.',
  },
  {
    title: 'IM1 Cost Reduction Project',
    company: 'EMIS Health (Optum)',
    description: 'Containerized CSV delivery process to prevent cluster OOM issues',
    problem:
      'CSV delivery processes were causing out-of-memory (OOM) issues on the Kubernetes cluster, resulting in failed jobs and performance degradation.',
    architecture:
      'Implemented containerized architecture using Docker and AWS ECS, with automatic scaling policies and resource limits.',
    approach:
      'Refactored monolithic delivery process into containerized microservices with proper resource allocation and auto-scaling.',
    challenges:
      'Managing memory constraints while processing large datasets, ensuring fault tolerance and automatic recovery.',
    results: [
      'Reduced execution time by 21%',
      'Eliminated OOM failures',
      'Improved cluster stability and reliability',
    ],
    technologies: ['Python', 'Docker', 'Airflow2', 'AWS ECS', 'Terraform'],
    lessonLearned:
      'Containerization is not just about deployment; it is about resource isolation and predictable behavior. Proper monitoring and alerting are essential.',
  },
  {
    title: 'SQLMesh Airflow Integration Project',
    company: 'EMIS Health (Optum)',
    description: 'Developed custom Airflow-SQLMesh integration mechanism',
    problem:
      'Team was managing data transformations across multiple tools, leading to complexity and maintenance burden.',
    architecture:
      'Custom integration layer between SQLMesh (modern transformation framework) and Airflow (orchestration).',
    approach:
      'Created abstraction layer enabling seamless SQLMesh DAG execution within Airflow, with proper error handling and observability.',
    challenges:
      'Ensuring compatibility between evolving versions of both tools, handling state management and idempotency.',
    results: [
      'Unified transformation management',
      'Improved code maintainability',
      'Enhanced developer experience',
    ],
    technologies: ['Python', 'SQLMesh', 'Airflow2', 'Terraform', 'AWS ECS'],
    lessonLearned:
      'Abstractions should be thin and well-defined. Good integration hides complexity while maintaining observability.',
  },
  {
    title: 'Control Tower Automation Project',
    company: 'Mahindra Logistics',
    description: 'Automated monitoring and control of logistics operations',
    problem: 'Manual monitoring of logistics operations was time-consuming and error-prone.',
    architecture:
      'Distributed automation system using Selenium for UI automation and AWS EC2 for compute.',
    approach:
      'Built Python-based automation framework with Selenium for intelligent task execution and monitoring.',
    challenges:
      'Handling distributed execution, managing state across multiple instances, handling failures gracefully.',
    results: [
      'Reduced manual work significantly',
      'Improved data accuracy',
      'Faster response times',
    ],
    technologies: ['Python', 'Selenium', 'AWS S3', 'AWS EC2', 'Pandas'],
    lessonLearned:
      'Automation is powerful but requires robust error handling. Always implement fallback mechanisms.',
  },
  {
    title: 'Trip Auto Verification Project',
    company: 'Whizzard',
    description: 'Automated verification of logistics trips using intelligent scraping',
    problem: 'Manual verification of trip data was causing delays and inaccuracies in reporting.',
    architecture:
      'Distributed data collection using Selenium with MongoDB as the data store.',
    approach:
      'Implemented intelligent web scraping combined with data validation and MongoDB storage.',
    challenges:
      'Handling dynamic web content, managing rate limiting, ensuring data consistency.',
    results: [
      'Automated manual verification process',
      'Improved data quality',
      'Faster reporting cycles',
    ],
    technologies: ['Python', 'Selenium', 'MongoDB', 'Pymongo', 'Pandas'],
    lessonLearned:
      'Web automation requires patience and resilience. Proper retry logic and error handling are crucial.',
  },
];

export const skills = {
  primary: [
    { name: 'Python', description: 'Primary language for data and platform engineering' },
    { name: 'Airflow2', description: 'Orchestration of complex data pipelines' },
    { name: 'Terraform', description: 'Infrastructure as Code for AWS resources' },
    { name: 'SQLMesh', description: 'Modern data transformation framework' },
    { name: 'Trino', description: 'Distributed SQL query engine' },
    { name: 'AWS', description: 'EC2, S3, ECS, cloud infrastructure' },
    { name: 'Docker', description: 'Containerization and deployment' },
    { name: 'dbt', description: 'Data transformation best practices' },
    { name: 'Data Modeling', description: 'Lakehouse and dimensional modeling' },
  ],
  secondary: [
    { name: 'SQL', description: 'Complex queries and optimization' },
    { name: 'MongoDB', description: 'NoSQL database and document modeling' },
    { name: 'Selenium', description: 'Web automation and scraping' },
    { name: 'TypeScript', description: 'Frontend and infrastructure code' },
    { name: 'HTML/CSS', description: 'Web development fundamentals' },
    { name: 'Flask', description: 'Python web framework' },
    { name: 'Pandas', description: 'Data analysis and manipulation' },
    { name: 'Java', description: 'Backend development' },
    { name: 'Linux', description: 'System administration' },
    { name: 'Git', description: 'Version control and collaboration' },
  ],
  tools: [
    { name: 'Datadog', description: 'Observability and monitoring' },
    { name: 'GitHub Actions', description: 'CI/CD automation' },
    { name: 'Tableau', description: 'Data visualization' },
    { name: 'Google Data Studio', description: 'Business intelligence' },
    { name: 'VS Code', description: 'Development environment' },
  ],
};

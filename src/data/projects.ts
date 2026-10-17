export const projects = [
  {
    number: "01",
    category: "MEDICAL ROBOTICS · MACHINE LEARNING",
    title: "EMG-Based Prosthetic Arm Control",
    description:
      "Developing machine-learning models that map electromyography (EMG) signals from the hand to prosthetic-arm gestures as part of Georgia Tech's Medical Robotics Club.",
    details: [
      "Spearheading the machine-learning sub-team developing models for EMG-to-gesture classification.",
      "Working with physiological signal data to translate muscle activity into control signals for a trans-radial prosthetic arm.",
      "Collaborating with mechanical and electrical engineering teams to ensure the ML system integrates with the physical prosthetic platform.",
      "Exploring the intersection of machine learning, human-computer interaction, and assistive medical technology.",
    ],
    technologies: ["Python", "Machine Learning", "EMG Signals", "Signal Processing", "Medical Robotics"],
  },
  {
    number: "02",
    category: "MACHINE LEARNING · SPORTS ANALYTICS",
    title: "Georgia Tech Softball Analytics",
    description:
      "Developed machine-learning-based analytics and visualization tools for Georgia Tech Softball through a Vertically Integrated Project.",
    details: [
      "Led a sub-team working directly with coaches to develop player analytics and personalized dashboards.",
      "Built and compared four machine-learning models for pitch classification.",
      "Evaluated models including Random Forest and XGBoost to identify an effective approach for pitch prediction.",
      "Created visualizations to communicate model outputs and player-level insights to a non-technical audience.",
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "NumPy", "Pandas", "Machine Learning", "Data Visualization"],
  },
  {
    number: "03",
    category: "COMPUTER VISION · DEEP LEARNING",
    title: "Real-Time Deception Detection & Poker AI",
    description:
      "Built an end-to-end deception detection system that combines facial micro-expression analysis, deep learning, computer vision, and a poker-playing AI to identify deceptive behavior during real-time Texas Hold'em gameplay.",
    details: [
      "Trained an LSTM model on facial micro-expression features extracted with OpenFace, achieving an 80% F1-score.",
      "Built computer vision components for playing-card identification and integrated them with a poker AI to support real-time gameplay decisions.",
      "Tested the complete system on an AI-powered Texas Hold'em robot, achieving 75% testing accuracy for real-time deception detection.",
      "Used multi-threading concepts to run a two-camera system alongside concurrent processes on macOS.",
      "Co-authored a publication-level research paper documenting the system's methodology, evaluation, and results.",
    ],
    technologies: ["Python", "PyTorch", "OpenFace", "LSTM", "Computer Vision", "Machine Learning", "Poker AI"],
  },
  {
    number: "04",
    category: "FULL-STACK · WEB DEVELOPMENT",
    title: "SJ Global Consulting: Production Web Platform",
    description:
      "Designed and deployed a production full-stack website for a consulting business, combining a modern React frontend with authentication, email workflows, content management, and ongoing SEO development.",
    details: [
      "Built the frontend using React and Tailwind CSS, including service pages and partner/service request workflows.",
      "Integrated Firebase for authentication and backend services, Nodemailer for transactional email, and WordPress for content management.",
      "Deployed and maintained the production application serving hundreds of active users.",
      "Improved business outreach by 95% through the redesigned digital experience and request workflows.",
      "Currently implementing SEO improvements to improve organic discovery and content visibility.",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase", "Nodemailer", "WordPress", "JavaScript", "Vercel"],
  },
  {
    number: "05",
    category: "FULL-STACK · COLLABORATIVE DEVELOPMENT",
    title: "Personal Finance Web Application",
    description: "A web application for authentication, financial tracking, and spending visualization.",
    details:
      "Collaborated on a three-feature application while managing a four-branch Git workflow, resolving merge conflicts, and coordinating development through Jira and agile practices.",
    technologies: ["JavaScript", "Web Development", "Git", "Jira"],
  },
];
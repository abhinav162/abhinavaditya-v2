---
date: '2025-01-01'
title: 'Software Developer (Full-stack & Infrastructure)'
company: 'HireQuotient'
location: 'Bengaluru, India'
range: 'January 2025 - Present'
url: 'https://hirequotient.com/'
---

- Built and scaled the multi-provider outbound email engine from scratch (Gmail, Outlook, SendGrid, SMTP/IMAP): a horizontally scalable RabbitMQ/Redis system dispatching 400K+ emails per day and 1.5M+ in a peak week, with sender-pool inbox rotation and OAuth 2.0 connection flows
- Shipped a multi-agent GenAI pipeline on an async FastAPI backend, with three cooperating stages (Gatekeeper, Generator, Critic) automating relevance scoring and personalized outreach to replace manual lead sourcing
- Delivered an end-to-end conversational recruiter copilot powered by LLM tool-calling, exposing 6+ natural-language actions so recruiters run core workflows entirely by chat
- Centralized all OpenAI and Azure OpenAI traffic across 2 backend services through a unified Bifrost (Maxim AI) LLM gateway with automatic provider fallbacks, streaming, and embedding generation
- Built 6+ end-to-end ATS and data-provider integrations (UKG Pro, Loxo, Lever, Wiza, Lusha) behind a single abstraction layer, each with OAuth 2.0 auth and bidirectional candidate sync
- Built a branch-locked, authorization-gated zero-trust CI/CD pipeline in GitHub Actions that blocks unauthorized production deploys org-wide, containerized all 5 services with Docker, and automated AWS ECR/ECS provisioning with Terraform and Ansible
- Orchestrated a cross-account migration of all EC2 servers to a new AWS environment and bootstrapped 2 production services from the first commit
- Delivered major dashboard surfaces in React 19, TypeScript, Redux, and Tailwind CSS with real-time Socket.io notifications, role-based access control, and inbox-rotation monitoring
- Led the application's Create React App to Vite migration and the move of legacy UI to a custom shadcn/ui + Tailwind component library, reducing bundle size and improving maintainability

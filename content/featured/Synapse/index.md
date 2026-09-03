---
date: '1'
title: 'Synapse'
cover: './synapse.png'
external: 'https://pypi.org/project/synapse-context-cli/'
tech:
  - Python
  - FastAPI
  - Rust
  - Temporal
  - Qdrant
  - MCP
---

Synapse indexes an entire codebase, uncommitted work included, and serves it to Cursor, Claude Code and Copilot over MCP. Seven services sit behind it: a FastAPI API, a Rust/Tree-sitter parser, Temporal-orchestrated ingestion from GitHub webhooks, and three-tier retrieval merging a Redis hot-WIP cache over Qdrant branch and global namespaces. Gitleaks scanning rejects secret-bearing files before they reach the embedding step. The CLI ships to PyPI with Sigstore attestations.

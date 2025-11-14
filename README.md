# Prompt Injection Demo

A comprehensive demonstration of prompt injection vulnerabilities in AI systems, including web-based examples and developer tool simulations.

## Overview

This repository contains multiple demonstrations of prompt injection attacks:

1. **Web-based demos** - Interactive examples showing various injection techniques
2. **VS Code/Copilot simulation** - Demonstrates how AI coding assistants can be influenced through poisoned documentation
3. **Research agent poisoning** - Shows how AI agents can be compromised via web content and exfiltrate data
4. **Presentation materials** - 5-minute presentation guide with speaker notes

## Repository Structure

```
├── web-demos/              # Web-based prompt injection examples
│   ├── 01-basic-injection/
│   ├── 02-hidden-text/
│   ├── 03-invisible-instructions/
│   ├── 04-markdown-injection/
│   ├── 05-context-confusion/
│   └── 06-delimiter-attack/
├── vscode-demo/           # GitHub Copilot simulation
│   ├── poisoned-docs/
│   ├── example-project/
│   └── demo-script.md
├── research-agent-demo/   # Research agent poisoning & exfiltration
│   ├── poisoned-blog-post.html
│   └── README.md
├── presentation/          # 5-minute presentation materials
│   ├── outline.md
│   └── demo-guide.md
└── README.md
```

## Quick Start

### Web Demos
```bash
cd web-demos
python -m http.server 8000
```

Visit http://localhost:8000 to see the demos.

### VS Code Demo
See `vscode-demo/demo-script.md` for step-by-step instructions.

### Research Agent Demo
Visit `research-agent-demo/` to see how AI research agents can be poisoned through web content.

## Educational Purpose

⚠️ **This repository is for educational purposes only.** The examples demonstrate security vulnerabilities to raise awareness and improve AI safety practices.

## License

MIT

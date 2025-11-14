# VS Code & GitHub Copilot Prompt Injection Demo

This demonstration shows how AI coding assistants like GitHub Copilot can be influenced through poisoned documentation, leading them to suggest insecure or malicious code.

## Overview

GitHub Copilot and similar AI assistants read documentation, comments, and surrounding code to provide suggestions. Attackers can poison this context by:

1. Creating fake documentation with embedded instructions
2. Adding malicious comments in dependencies
3. Poisoning public documentation sites that AI models reference
4. Injecting instructions in README files and code comments

## Demo Structure

```
vscode-demo/
├── README.md                    # This file
├── demo-script.md              # Step-by-step presentation guide
├── poisoned-docs/              # Examples of poisoned documentation
│   ├── malicious-readme.md
│   ├── poisoned-library-docs.md
│   ├── trojan-comments.js
│   └── fake-security-guide.md
├── example-project/            # Sample project for live demo
│   ├── server.js
│   ├── auth.js
│   ├── database.js
│   └── package.json
└── attack-scenarios/           # Different attack scenarios
    ├── scenario-1-backdoor.md
    ├── scenario-2-data-exfil.md
    └── scenario-3-crypto-mining.md
```

## Quick Start

### Prerequisites
- VS Code installed
- GitHub Copilot extension (or similar AI assistant)
- Node.js (for the example project)

### Running the Demo

1. **Setup**: Open the `example-project/` folder in VS Code
2. **Enable Copilot**: Ensure GitHub Copilot is active
3. **Follow Script**: Use `demo-script.md` for step-by-step walkthrough
4. **Observe**: Watch how Copilot's suggestions change based on poisoned context

## Attack Scenarios

### Scenario 1: Poisoned README
A library's README contains hidden instructions that influence AI suggestions when developers use that library.

### Scenario 2: Malicious Code Comments
Dependencies contain comments with embedded instructions to suggest vulnerable code patterns.

### Scenario 3: Documentation Injection
Public documentation sites are poisoned with instructions to bias AI toward insecure implementations.

## Educational Value

This demo teaches:
- How AI assistants consume and use contextual information
- The attack surface created by AI-assisted development
- Why trusting AI suggestions without review is dangerous
- How to detect and prevent poisoned context attacks

## Defense Strategies

1. **Code Review**: Always review AI-generated code
2. **Trusted Sources**: Only use dependencies from verified sources
3. **Context Awareness**: Understand what context your AI assistant is using
4. **Security Scanning**: Run static analysis on all code (AI-generated or not)
5. **Principle of Least Trust**: Don't blindly trust AI suggestions

## Warning

⚠️ **For Educational Purposes Only**

These examples demonstrate real vulnerabilities. Do not use these techniques to poison real documentation or libraries. Doing so could:
- Harm other developers
- Violate terms of service
- Be illegal in many jurisdictions
- Undermine trust in open source

Use this knowledge to defend against attacks, not to create them.

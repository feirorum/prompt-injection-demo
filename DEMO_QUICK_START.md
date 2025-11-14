# Quick Start Guide

Get the demo running in under 5 minutes!

## Web Demos

```bash
cd web-demos
python -m http.server 8000
```

Then open: http://localhost:8000

**Best demos to show:**
1. **Hidden Text** (`02-hidden-text/`) - Most visual impact
2. **White-on-White** (`03-invisible-instructions/`) - Classic technique
3. **Basic Injection** (`01-basic-injection/`) - Core concept

## VS Code Demo

1. Open VS Code
2. File → Open Folder → `vscode-demo/example-project/`
3. Ensure GitHub Copilot is enabled
4. Follow `vscode-demo/demo-script.md` step by step

**Key files:**
- `demo-script.md` - Step-by-step walkthrough
- `poisoned-docs/malicious-readme.md` - Shows how docs can be poisoned
- `example-project/` - Clean project for live coding

## 5-Minute Presentation

Everything you need is in `presentation/`:

- **`outline.md`** - Complete slide-by-slide breakdown with timing
- **`demo-guide.md`** - Detailed speaker notes and tips

**Recommended flow:**
1. Intro (30s)
2. Explain prompt injection (45s)
3. Web demo - show hidden text (60s)
4. VS Code demo - show poisoned suggestions (90s)
5. Defense strategies (60s)
6. Takeaways (45s)

## Presentation Checklist

**Setup (5 min before):**
- [ ] Start web demo server: `python -m http.server 8000`
- [ ] Open VS Code with `example-project/`
- [ ] Check Copilot is enabled
- [ ] Have backup screenshots ready

**During presentation:**
- [ ] Show hidden text reveal (biggest impact)
- [ ] Demo normal Copilot vs poisoned
- [ ] Emphasize: "AI can't distinguish malicious from legitimate docs"
- [ ] End with actionable defenses

## Key Messages

1. **The Problem:** AI processes all text equally - can't distinguish instructions from data
2. **The Attack:** Poisoned docs in dependencies influence AI coding assistants
3. **The Impact:** Vulnerable code gets suggested and shipped to production
4. **The Defense:** Human review + multiple security layers

## Troubleshooting

**Copilot not suggesting vulnerable code?**
- Model may have improved defenses (good!)
- Use backup screenshots
- Focus on explaining the concept

**Demo server won't start?**
- Try: `python3 -m http.server 8000`
- Or use any local web server
- Fallback: open HTML files directly

**VS Code issues?**
- Ensure Copilot extension is installed
- Check you're in correct folder
- Restart VS Code if needed

## What to Emphasize

### For Technical Audience:
- Supply chain attack vector
- Delimiter breaking techniques
- Defense-in-depth approach

### For Management:
- Risk to deployed code
- Need for security policies
- Cost of breaches vs prevention

### For Developers:
- Practical defenses they can use today
- How to review AI suggestions
- Tools for detection

## Resources in This Repo

```
├── web-demos/              # 6 interactive web examples
├── vscode-demo/           # Copilot poisoning simulation
├── presentation/          # Complete 5-min presentation
├── README.md              # Project overview
└── DEMO_QUICK_START.md    # This file
```

## Next Steps After Demo

**Share with attendees:**
- Link to this repository
- One-page defense checklist
- Contact info for follow-up

**Measure success:**
- Code review policy updates
- Security tool adoption
- Team awareness of AI risks

## Questions?

Common questions and answers are in:
- `presentation/demo-guide.md` (Q&A section)
- `vscode-demo/demo-script.md` (troubleshooting)

---

**Remember:** The goal is to educate, not scare. AI assistants are valuable tools - we just need to use them wisely!

Good luck with your presentation! 🎯

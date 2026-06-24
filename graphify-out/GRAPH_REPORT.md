# Graph Report - .  (2026-06-03)

## Corpus Check
- 79 files · ~428,113 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 10 nodes · 9 edges · 4 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 1,200 input · 300 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Shared Vehicle Database|Shared Vehicle Database]]
- [[_COMMUNITY_Catalog Web Interface|Catalog Web Interface]]
- [[_COMMUNITY_Python Utility Script|Python Utility Script]]
- [[_COMMUNITY_Project Backups|Project Backups]]

## God Nodes (most connected - your core abstractions)
1. `carrosDados` - 1 edges
2. `carros` - 1 edges
3. `backup/carros antigos.html` - 1 edges
4. `backup/detalhes.html` - 1 edges

## Surprising Connections (you probably didn't know these)
- `backup/detalhes.html` --references--> `backup/carros antigos.html`  [EXTRACTED]
  backup/detalhes.html → backup/carros antigos.html

## Communities

### Community 0 - "Shared Vehicle Database"

Cohesion: 0.67
Nodes (2): carros, carrosDados

### Community 1 - "Catalog Web Interface"

Cohesion: 1.0
Nodes (0): 

### Community 2 - "Python Utility Script"

Cohesion: 1.0
Nodes (0): 

### Community 3 - "Project Backups"

Cohesion: 1.0
Nodes (2): backup/carros antigos.html, backup/detalhes.html

## Knowledge Gaps
- **4 isolated node(s):** `carrosDados`, `carros`, `backup/carros antigos.html`, `backup/detalhes.html`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Python Utility Script`** (2 nodes): `read_file()`, `main.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Backups`** (2 nodes): `backup/carros antigos.html`, `backup/detalhes.html`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `carrosDados`, `carros`, `backup/carros antigos.html` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._
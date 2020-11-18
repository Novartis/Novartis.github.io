---
name: PISCES
abbreviation: pisces
projectName: pisces
launched: 2020-11-18
summary: a package for rapid quantitation and quality control of large scale mRNA-seq datasets
description: |
  PISCES eases processing of large mRNA-seq experiments by encouraging capture of metadata using sim- ple textual file formats, processing samples on either a single machine or in parallel on a high performance computing cluster (HPC), validating sample identity using genetic fingerprinting, and summarizing all outputs in analysis-ready data matrices. 
---

## Why PISCES?

PISCES eases processing of large mRNA-seq experiments by encouraging capture of metadata using sim- ple textual file formats, processing samples on either a single machine or in parallel on a high performance computing cluster (HPC), validating sample identity using genetic fingerprinting, and summarizing all outputs in analysis-ready data matrices. PISCES consists of two modules: 1) compute cluster-aware analy- sis of individual mRNA-seq libraries including species detection, SNP genotyping, library geometry detec- tion, and quantitation using salmon, and 2) gene-level transcript aggregation, transcriptional and read- based QC, TMM normalization and differential expression analysis of multiple libraries to produce data ready for visualization and further analysis.
PISCES is implemented as a python3 package and is bundled with all necessary dependencies to enable reproducible analysis and easy deployment. JSON configuration files are used to build and identify tran- scriptome indices, and CSV files are used to supply sample metadata and to define comparison groups for differential expression analysis using DEseq2. PISCES builds on many existing open-source tools, and re- leases of PISCES are available on GitHub or the python package index (PyPI).

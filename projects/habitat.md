---
name: Habitat
abbreviation: Habitat
projectName: habitat
launched: 2016-04-29
icon: /projects/habitat/habitat-icon.png
summary: Habitat - Where files live. A simple and yet powerful self-contained object storage management system.
description: |
  Habitat is a simple and yet powerful self-contained object storage management system.
  Based on Amazon Web Services, it is capable of virtually unlimited storage.
  Instead of a large centralized management system, Habitat can be used as a local repository
  for a single application or it can be shared and used with many clients.

  Habitat is best used for situations where the client producers and consumers of the files
  do not require a file system protocol interface and can use http(s) to access the store.
---

## Key features

- Upload/download via http(s) from any client that can issue HTTP POST requests
- Upload/download via any tools that support writing/reading from S3. For example:
  - Web browser (via a Java applet http://docs.aws.amazon.com/AmazonS3/latest/UG/enhanced-uploader.htm)
  - Windows client: http://s3browser.com
  - Windows client: http://www.cloudberrylab.com/free-amazon-s3-explorer-cloudfront-IAM.aspx#close
  - Future: Web browser: we are building a web client that we will likely open source
- Future: upload via file interface where a file is stored by dropping in a temp directory
- Future: checkout a collection of files into a local file system (setting user/group permissions as desired)
- Immutable reference key for each stored file
- Stores metadata about the object from a variety of sources:
  - Parsed from the file name (customized parsing via a regular expression)
  - Extracted from the file contents (via a custom plugin)
  - Exracted from a companion metadata file (uploaded either before or after the data file)
  - Extracted from the write action event itself
  - Extracted from the S3 metadata attribute on the object
- Life cycle management to reduce to lower cost storage or to delete after defined time periods
- Get file or file list based on metadata search
- Search index using a discrete or shared Elastic Search instance
- Future: Supports object versioning
- Easily customized to tailor to unique requirements (config file driven, with custom plugins)
- Supports saving a shadow copy of metadata into the S3 object metadata in addition to the Elastic Search index

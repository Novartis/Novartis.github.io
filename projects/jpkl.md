---
name: JPkl
abbreviation: jpkl
projectName: jpkl
launched: 2018-09-18
summary: Fast, compressed JPEG storage for NumPy applications.
description: |
  Serialize high memory / disk consumption NumPy multidimensional arrays of images into JPEG-Pickle files for low storage cost and decently fast, random access with NumPy-like indexing.
---

# JPkl - multidimensional image arrays to single JPEG-Pickles in Python

Serialize high memory / disk consumption NumPy multidimensional arrays of images into JPEG-Pickle files for low storage cost and decently fast, random access with NumPy-like indexing.

Code at a glance:

```python
import numpy as np
from jpkl import JPkl

# Make some arbitrary data. Say we have 512x512 images with time, z depth, and multiple channels.
images = np.zeros((512, 512, 100, 3, 2))

# Automagically encode all 512x512 images into JPEGs.
jpkl_images = JPkl(images)

# Index / slice encoded JPEGs as you would a NumPy array.
# JPEG-encoded slices are decoded and all concatenated into an array on-the-fly.

decoded_images = pkl_images[128:256:2, :, 4, ...]  # decoded_images is a NumPy array

decoded_images.shape  # (64, 512, 14, 15) [array is .squeeze()'d as in NumPy indexing]

# JPkl objects support 3 simple NumPy array properties.
# This means you can sometimes get away with passing a JPkl instead of an array to functions.

jpkl_images.shape    # (512, 512, 100, 3, 2)
jpkl_images.ndim     # 5
jpkl_images.size     # 5505024000 [product of pkl_images.shape elements]

# Pickle your JPkl and save to disk:
jpkl_images.save('pickled_images.jpkl')

# Load a saved JPkl file:
saved_jpkl_images = JPkl.load('pickled_images.jpkl')
```

Note that JPkl data is immutable from the high-level interface.

See the Jupyter Notebook demo for a more in-depth walkthrough (as well as a cool HoloViews visualization demo of scrubbing through these multidimensional arrays!).

## Motivation

Data from scientific imaging applications (such as microscopy) is often stored as raw, uncompressed data. This is important in cases where accurate quantification on pixel values is necessary. Due to this need, however, these image files (and their corresponding memory footprints) are often large, sometimes approaching 10s (or more) of gigabytes in extreme examples. While memory-mapping these files to access them without loading everything into memory is often a viable option, large I/O speed demands due to the sizes of individual frames makes latency during visualization a possible issue. Additionally, this mapping still does not solve the issue of huge disk space consumption.

As such, to facilitate speedy visualization of the raw / completely processed images as well as intermediate stage images (which you may not need to keep the uncompressed pixel values for anyway), it makes sense to lossily compress the images for non-computional, solely visualization purposes. JPkl handles this need by compressing all the individual image slices into JPEGs in memory which can then be serialized out to disk. Depending on image content and JPEG quality level, you can see massive (5-10x +) decreases in file size. In addition, JPkl supports on-the-fly decoding of abitrary slices of the pseudo-NumPy array into true NumPy arrays, meaning when you unpickle the JPkl file, your memory consumption remains as low as the file usage on disk unless you want to convert the whole JPkl into an array at once.

Note that JPkl is not limited to using Pickle serialization or JPEG encoding. Extending the `JPkl` class and changing the implementations of `jpkl_obj.save()` / `JPkl.load()` or `jpkl_obj.encode_slice()` / `jpkl_obj.decode_slice()` will allow you to use any serialization or encoding you wish as appropriate for your application, respectively.

JPkl is most useful in the case where you have:

- Large raw image datasets which you would like to visualize (such as in a Jupyter Notebook)
- Datasets that are highly multi-dimensional (x,y spatial + arbitrary number of time / channel axes)
- The need to visualize intermediate steps of image processing (which adds a multiplier on disk space consumption if
  intermediate steps are stored as raw images)
- The desire to keep all images from a dataset / NumPy array in a single file, rather than all messily dumped as separate .jpgs into the filesystem

JPkl uses the Pillow (PIL fork) library for encoding / decoding JPEG images.

## Attribution

This is part of the Open Source at Novartis Institutes for BioMedical Research (NIBR) initiative:

- [Open Source @ NIBR home](https://opensource.nibr.com/)
- [GitHub organization](https://github.com/Novartis/)

It is licensed under Apache License, Version 2.0.

Maintainer: @zbarry

## JPkl class / file format specification:

JPkls on disk are simply a dictionary of:

```
'header': Tuple of ('JPkl', 'version'), version in set{'1'}
    Used for sanity checking if file on disk is JPkl file and is a loadable version.

'color': bool: if True, this came from a set of images with a color channel.
    Therefore, the third axis [index 2] of the returned stack will be of length 3 for RGB.
    Otherwise, there is no color axis.

'jpeg_quality': int: level of JPEG compression (0-100).

'images': Dictionary of byte streams from Pillow `Image` objects encoding images to `bytes` using `io.BytesIO` memory streams
    Each key of the dictionary is a tuple of (channel 1, channel 2, ...) indices which correspond to a single image
    slice. All images must be of the same width and height (since they are derived from / decoded into NumPy arrays).
    jpkl_obj.images[0, 5, 2], for example, returns a byte stream of the JPEG-encoded image slice which would have
    been accessed in the original NumPy array as `image_array[:, :, 0, 5, 2]`. If the images were RGB, the color
    axis is not a key in the dictionary.

'dim_names': List of strings of axis identities that come after height, width. Does not include color name. Not necessary for JPkl, but included for user's own documentation, if desired.

'dim_sizes': Tuple of the lengths of each channel axis. Does not include [height, width, RGB] axes.

'metadata': Dictionary of arbitrary data for the user's usage. Completely ignored by JPkl.
```

## Installation

**Dependencies (installation is through Anaconda system):**

### JPkl:

- Python >= 3.6
- NumPy
- Pillow (Python Imaging Library fork)

### Jupyter Notebook demo:

- Jupyter Notebook / Lab
- HoloViews and associated libraries:

  - Param
  - ParamBokeh
  - Bokeh
  - ImaGen

### Installation procedure:

Default installation including libraries enabling the notebook demo:

```
git clone <<repo>>
cd jpkl
source activate YOURENVNAME
conda env update -f environment.yml
pip install .
```

Substitute `pip install -e .` above if you wish to make edits to the source.

While using a Conda environment is highly recommended in general, you can technically leave out the the `source activate YOURENVNAME` line to install to the default package folder. If you've not used Conda environments before, you can create one with `conda create -n YOURENVNAME` and then activate it with `source activate YOURENVNAME` as in above. This will allow you to keep your installed packages separate between projects.

Lightweight install with solely JPkl functionality without visualization:

```
git clone <<repo>>
cd jpkl
source activate YOURENVNAME
conda env update -f environment-novis.yml
pip install .
```

## Contributing

I am more than happy to field pull requests! If interested, please post an issue for what you're thinking about working on so I can make sure it aligns with the vision for the project. The current guiding principle here is to keep it as lightweight / minimalistic as possible, though this is by no means set in stone.

Areas of immediate interest for PRs:

- Multiprocessing for encoding / decoding (chunks of / whole) huge NumPy arrays quickly. Initial array encoding isn't incredibly fast, though random access for visualization is very usable. Multiprocessing might be a huge boon for the initial construction of the JPkls from arrays.
- Clever ways of caching frequently-accessed images might be useful in some cases.
- Other encoding / compression methods which may be superior to JPEG / Pickle files.

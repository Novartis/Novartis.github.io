---
name: Railroadtracks
abbreviation: Railroadtracks
projectName: railroadtracks
icon: /projects/railroadtracks/railroadtracks-logo.png
launched: 2014-11-07
buttons:
  - link: railroadtracks.pdf
    icon: file
    text: Documentation (PDF)
summary: |
  A toolkit for DNA and RNA-Seq processing steps.
description: |
  `railroadtracks` is a Python toolkit to handle graphs of dependent tasks such as the ones found in bioinformatics pipelines.

  It was created for comparing RNA-Seq pipelines and found its use is other situations, such as writing a flexible system 
  for the QC of NGS data.
---

<p>
`railroadtracks` is providing the following main features:
</p>

<ul>

<li><i>ad hoc</i> creation of pipelines, interactive use
  in mind and <a href="http://ipython.org">ipython</a>-specify
  display of objects</li>

<li>separation of the declaration of tasks from their
  execution</li>

<li>simple abstractions to perform parallel computing
  allowing computations to be moved easily to different
  models for parallel and distributed computing</li>

<li>a fully-extendable and editable model layer unifying
  popular tools in DNA and RNA-sequencing
  data processing under one common interface.</li>

<li>It can be installed as a regular Python package,
	for example using `pip install`. A tutorial as
an ipython notebook is avaible as part of the
documentation for the package.</li>
</ul>

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000" style="img-rounded">
	<!-- Indicators -->
	  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
  </ol>
	<div class="carousel-inner">
		<div class="item active">
		    <center>
			<img src="ipython.png" alt="First slide" height="400px">
			</center>
			<div class="carousel-caption" style="background: rgba(255, 255, 255, .6)"><h1>Use in the ipython notebook</h1></div>
		</div>
		<div class="item">
			<center>
			<img src="model.svg" alt="Second slide" height="400px">
			</center>
			<div class="carousel-caption" style="background: rgba(255, 255, 255, .6)"><h1>Model for RNA-Seq</h1></div>
		</div>
	</div>
  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

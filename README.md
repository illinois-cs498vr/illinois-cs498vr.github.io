# CS 498 VR: The Website 

Course website for CS 498 Virtual Reality at the University of Illinois.
[![Build Status](https://travis-ci.org/illinois-cs498vr/illinois-cs498vr.github.io.svg?branch=master)](https://travis-ci.org/illinois-cs498vr/illinois-cs498vr.github.io)

## Getting Started

* [Install Jekyll](https://jekyllrb.com/docs/installation/)
* `cd` to the location of the cloned repo
* Run `bundle install` for dependencies
* Run `bundle exec jekyll serve` to start the website, then visit [`http://localhost:4000`](http://localhost:4000).

## Semesterly chores

In `_config.yml`, under `semester`, there are a set of variables that may need to change every semester. 

## Miscellaneous Documentation

### Managing the class schedule

In `_data/schedule.yml` there is a list of objects, each representing one class. Each one must contain the following fields:

- `date`: string containing the date of the lecture (formatted like so: `"27 Aug 2018"`)
- `materials`: string, will be markdownified. Should contain relevant textbook chapters to that lecture and optionally any 
extra materials.
- `title`: string, will be markdownified. Should link to the slides.
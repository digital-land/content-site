---
title: Conservation areas
hidden: false
description: "We are going to explore how we can help Local Authorities make
  Conservation area data available. "
startdate: 2021-09-08T11:01:05.299Z
status: In progress
updates:
  - title: Added extra data for Lambeth and Southwark
    text: >-
      We have collected additional information for conservation areas
      in [Lambeth](https://digital-land.github.io/conservation-area/local-authority-eng/LBH/) and [Southwark](https://digital-land.github.io/conservation-area/local-authority-eng/SWK/).
      We have added missing names, references, documentation-urls and
      additional [associated
      documents](https://digital-land.github.io/document/).


      Another paragraph here
    type: decision
    date: 2021-09-08T13:19:00.716Z
  - date: 2021-04-30T13:15:13.733Z
    text: Whilst collecting extra data for Lambeth and Southwark we learnt that
      often there is more than 1 document related to the conservation area. We
      decided a conservation area, as data, is best represented by
      a [geography](https://digital-land.github.io/specification/schema/geography/),
      to describe the area, and a list of
      related [documents](https://digital-land.github.io/specification/schema/document/).
    title: A geography and multiple documents
    type: decision
  - date: 2021-09-09T14:33:51.107Z
    title: Paul S is sick of his own voice
    type: learning
    text: djhdjdkjdkjd
related:
  - title: Related artefacts
    links:
      - text: BBC
        url: https://news.bbc.co.uk
      - text: GOV
        url: https://gov.uk
    items:
      - text: Digital Land
        url: https://digital-land.info
      - text: Guidance
        url: https://news.bbc.co.uk
published: true
type: inprogress
---
A conservation area is an area of environmental or historical interest or importance considered worth preserving or enhancing. They are defined by local authorities and impact on developments as conservation areas are protected against changes by law.

Conservation areas have been around since 1967 which means a lot of the information is locked up in documents. Those historical documents can range from press announcements, archive paper records and PDFs. The boundary defining the conservation area is usually held in a Local authority's GIS (Geographic Information System). GIS software utilises a framework for collecting, analyzing and managing data digitally.

Neither of these sources are readily available as data. GIS data isn’t always easily accessible meaning we can’t retrieve, find and use the data we need or there can be issues with data quality. Digital Land is interested in seeing what data can be produced from available information and how it can be combined to make a national dataset.

## Why we are looking at conservation areas

Conservation areas exist in document form, are well understood as a concept and are often listed on a local authority website.

Previously, we've collected geometries from ONS but we want to explore local authority defined geometries. This project allows us to investigate and test what we need to do to collect real data from local authorities.

## Milestones

[Guidance](https://www.gov.uk/guidance/conserving-and-enhancing-the-historic-environment) exists to help local authorities create and publish conservation area data.
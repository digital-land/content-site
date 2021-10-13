---
title: Brownfield land data package guidance
hidden: false
date: 2021-10-13T14:22:55.813Z
description: A first iteration of guidance for using the brownfield land data package.
---
The [Town and Country Planning (Brownfield Land Register) Regulations 2017](http://www.legislation.gov.uk/uksi/2017/403/contents/made) require local planning authorities to maintain a register of their brownfield sites that are suitable for housing.

Digital Land have collected the brownfield land registers published by each local planning authority and built a national register.

This data package contains the files you need in order to understand the national register of brownfield land.

# Files included in the data package

## brownfield-land.csv

A normalised and transformed collection of the brownfield land registers collected from each local planning authority.

## organisation.csv

A list of organisations who create, publish and maintain land and housing data.

# Joining each .csv file

In order to join the brownfield-land.csv and organisation.csv you can map using the `organisation` field in each file.

For example, you would do this if you wanted to show the local planning authority name for each brownfield site.

# Field definitions

## brownfield-land.csv

### deliverable

If ‘yes’ there is a reasonable prospect that residential development will take place on the land within 5 years of the date this site was entered in the register.end-date

The date the site was developed or determined to no longer be brownfield land.

### entry-date

The date that the site was first added to this register

### hazardous-substances

If ‘yes’ the local planning authority is required by [regulation 26(3) of the Planning (Hazardous Substances) Regulations 2015](https://www.legislation.gov.uk/uksi/2015/627/regulation/26/made) to conduct an environmental impact assessment on the proposed development.

### hectares

The land area of each site in hectares, up to 2 decimal places.

### maximum-net-dwellings

The maximum number of dwellings that the local planning authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

### minimum-net-dwellings

The minimum number of dwellings that the local planning authority estimates the site should support, as defined in [regulation 2 of the 2017 Regulations](http://www.legislation.gov.uk/uksi/2017/403/regulation/2/made).

### name

The unique reference the local planning authority uses to identify the site. Note, the site name should be unique within each organisation’s register but may not be within the national dataset.

### notes

Any general information about a site that developers might find useful, including a description of any housing development proposed for the site.

### organisation

An identifier of the organisation that created the brownfield site.

### ownership-status

Indicates the site’s ownership as being:

* owned by a public authority
* not owned by a public authority
* mixed ownership.

### planning-permission-date

The date the most recent permission was granted on the site.

### planning-permission-history

Links to any web pages that give information on the site’s planning history.

### planning-permission-status

Indicates what stage of the planning process the site is. A site can be:

* permissioned
* not permissioned
* pending decision.

### planning-permission-type

The most recent type of permission the site has from:

* full planning permission
* outline planning permission
* reserved matters approval
* permission in principal
* technical details consent
* planning permission granted under an order
* other

### point

The longitude and latitude coordinates for each site

### site

The unique reference the local planning authority uses to identify the site. Note, the site reference should be unique within each organisation’s register but may not be within the national dataset.

### site-address

The address of the site.

### site-plan-url

The URL of the site plan.

### start-date

The date that the site became recognised as a brownfield site.

### slug

A human read-able identifier for each site in the national register, created by Digital Land

### entity

A unique ID for each site in the national register, created by Digital Land

## organisation.csv

### organisation

An identifier for each organisation as defined by GOV.UK registers.  

### entity

A unique ID for each organisation, created by Digital Land.

### wikidata

The wikidata ID for each organisation.

### name

The name of the organisation.

### website

The URL of the organisation’s website.

### twitter

The twitter handle for the organisation.

### statistical-geography

The ONS statistical geography code for each organisation.

### boundary

A URL to the geojson file that provides the organisation boundary. 

### toid

A unique reference assigned by the Ordnance Survey for each topographical feature. 

### opendatacommunities

A URL for each organisation resource at Open Data Communities.

### opendatacommunities-area

A URL for the area of each organisation at Open Data Communities.

### billing-authority

The billing authority code for each organisation.

### census-area

The census code for each organisation as defined by ordnance survey.

### local-authority-type

The local authority type ID as defined by GOV.UK’s local authority type register.

### combined-authority

The organisation curie of other organisations that make up a combined authority.

### esd-inventories

The organisation ID for the electronic service delivery toolkit.

### local-resilience-forum

Identifies which local resilience forum the organisation is a member of.

### region

Identifies which region the organisation is within.

### addressbase-custodian

The organisation ID as defined by address base.

### company

The companies house number for the organisation.

### wikipedia

The wikipedia page for the organisation.

### start-date

The date that the organisation was established.

### end-date

The date that the organisation was dissolved.
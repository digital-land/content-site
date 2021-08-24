---
title: Publish your geographies as data
date: 2021-08-19
description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Architecto quos sunt soluta. Suscipit ratione ipsa soluta aliquid numquam
  quidem laboriosam animi porro sit minima perferendis hic fugit vitae, quia
  corporis!
modified: now
intro: ""
location: '{"type":"Polygon","coordinates":[[[-11.2769327,22.7767942],[-9.6539864,23.2580676],[-7.9380915,22.7578914],[-8.1779198,22.1071593],[-7.5056081,21.472803],[-8.4234828,20.746816],[-10.505227,20.4974765],[-10.1348273,21.4933272],[-11.3357361,21.3496495],[-11.040901,22.3165536],[-11.729119,22.3833847],[-11.2769327,22.7767942]]]}'
---
This guidance sets out how to structure and publish geographical data. hello

It details what data should be provided and how it should be made available online.

A geography can be any area, location, site or boundary you have created and these two images show what the data looks like.

**Boundary**

[![Site boundary](https://res.cloudinary.com/digital-land/image/upload/v1626864208/digital-land.github.io_conservation-area_stonesfield_btkguo.png)](https://res.cloudinary.com/digital-land/image/upload/v1626864208/digital-land.github.io_conservation-area_stonesfield_btkguo.png)

[See complete record for this conservation area record](https://digital-land.github.io/conservation-area/local-authority-eng/WOX/48/)

**Point**

[![Site boundary](https://res.cloudinary.com/digital-land/image/upload/v1626864208/digital-land.github.io_listed-building_old-vicarage_osox8x.png)](https://res.cloudinary.com/digital-land/image/upload/v1626864208/digital-land.github.io_listed-building_old-vicarage_osox8x.png)

[See complete record for the listed building record](https://digital-land.github.io/listed-building/1021474/) shown as a point.

You can publish your geography data as [GeoJSON](https://geojson.org/), [ESRI shapefiles](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/library/whitepapers/pdfs/shapefile.pdf), [KML](https://developers.google.com/kml) or CSV containing the geometry as [WKT](https://www.ogc.org/standards/wkt-crs).

Each record must contain a boundary, polygon or site point.

## Publishing as GeoJSON, shapefiles or KML

GeoJson, a shapefile or KML consists of data for the shape or point, and a number of attributes containing data about the geography.

Each record should include the following attributes:

### name

The name of the area or boundary which your organisation uses. This will be used as the name that users see and refer to, for example, Rawcliffe.

### documentation-url

If available, a link to the documentation which contains the authoritative boundary. This may be the appraisal document, or separate PDF containing the map and “red line” boundary. A URL is a permanent link that doesn’t change.

### legislation

Policy or relevant legislation related to the geographical data or area, such as conservation areas.

### organisation

Use the code for the organisation that created the area or boundary. This is usually made up of letters and sometimes numbers. This will allow machines to link the data to the publishing organisation; for example, NFK is the code for Norfolk County Council.

You can use the list of organisations to help you find your organisation code.

### reference

A unique number or code used to identify the geographical area. The code should be unique within your organisation, for example, CA01.

If a reference code has been used to refer to a different location in the past, you should add something to the reference to make it unique and meaningful to your organisation.

For example, if E07000137 has been used in the past to refer to another area, add letters such as LKQ, numbers or a combination that makes sense to you. This will make a new reference for the new location and in this case you would have the reference E07000137-LKQ.

If you have inherited locations defined by old organisations you could prefix the references with the organisation code. For example, WYO-E07000137 and AYL-E07000137.

### notes

Supplementary information related to the geographical data.

### entry-date

The date you created or updated the data record in your GIS system or in the CSV. Where possible, use the format YYYY-MM-DD for dates, for example, `2021-02-26`.

### start-date

The date the geographical data was first created. Use the format YYYY-MM-DD for dates where possible, for example, `1991-06-12`.

### end-date

The date the geographical area no longer existed due to a change like a boundary change. Where possible, use the format YYYY-MM-DD for dates. This date can be in the future if the date it will stop being a location or boundary is known, for example, `2025-10-11`.
# Digital Land - Website content pages

The Digital Land content site. Uses [11ty](https://11ty.dev) and [NetlifyCMS](https://netlifycms.org) to generate static GOVUK HTML pages from markdown files with structured frontmatter.

## Requirements

- [Node v12+](https://nodejs.org/)

## Installation

1. Start by forking or cloning this repository.
2. In terminal switch to the root directory, for example: `cd content-site`
3. Install the dependencies: `npm install`

## Running locally

1. In terminal switch to the root directory and run `npm start`
2. Open your browser to: `http://localhost:8080`

## Developing locally

1. Open the NetlifyCMS configuration file: `app/admin/config.yml` and set `local_backend: true`
2. In terminal switch to the root directory and run `npx netlify-cms-proxy-server`
3. In a separate terminal window or multiplexer frame in the root directory run `npm run dev`
4. 2. Open your browser to: `http://localhost:8080` (Browser sync should do this automatically though)

Full details and troubleshooting can be found in [NetlifyCMS Documentation](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository)

### Templates

#### Filters

##### Date

A machine date can be converted to a human readable date using the `date` filter. For example:

```
{{ publishDate | date("d LLLL y")}}
```

Will output a date formatted like this `4 September 2021`. Other formats can be found in the [documentation for Moment Luxon](https://moment.github.io/luxon/#/formatting)

## Acknowledgements

Thank you to the community of designers and developers who have developed and documented 11ty and NetlifyCMS for teams like ours to use and benefit from.

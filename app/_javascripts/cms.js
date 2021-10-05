// Usage with import from npm package
import CMS, { init } from "netlify-cms";

init({
  config: {
    backend: {
      name: "github",
      branch: "main",
      repo: "digital-land/content-site",
      base_url: "https://dl-cms-oauth-service.herokuapp.com",
    },
    load_config_file: false,
    local_backend: process.env.NODE_ENV,
    logo_url: "/assets/images/dl-logo.svg",
    publish_mode: "editorial_workflow",
    public_folder: "/assets/images/uploads",
    media_folder: "app/images/uploads",
    display_url: "https://digital-land.netlify.app",
    site_url: "https://digital-land.netlify.app",
    collections: [
      {
        name: "guidance",
        label: "Guidance pages",
        label_singular: "Guidance page",
        folder: "app/content/guidance",
        create: true,
        slug: "{{slug}}",
        preview_path: "guidance/{{slug}}",
        fields: [
          {
            label: "Title",
            name: "title",
            widget: "string",
          },
          {
            label: "Hidden",
            name: "hidden",
            widget: "boolean",
            default: false,
            hint: "Hides this content from the site. Defaults to false.",
          },
          {
            label: "Publish Date",
            name: "date",
            widget: "datetime",
          },
          {
            label: "Description",
            name: "description",
            widget: "text",
            hint: "A summary of this guidance",
          },
          {
            label: "Body",
            name: "body",
            widget: "markdown",
          },
        ],
      },
      {
        name: "project",
        label: "Project pages",
        label_singular: "Project page",
        folder: "app/content/project",
        create: true,
        slug: "{{slug}}",
        preview_path: "project/{{slug}}",
        fields: [
          {
            label: "Title",
            name: "title",
            widget: "string",
            hint: "The document title and primary heading",
          },
          {
            label: "Hidden",
            name: "hidden",
            widget: "boolean",
            default: false,
            hint: "Hides this content from the site. Defaults to false.",
          },
          {
            label: "Description",
            name: "description",
            widget: "text",
            hint: "A summary of the content in this page",
          },
          {
            label: "Project start date",
            name: "startdate",
            widget: "datetime",
            hint: "When did this project start?",
          },
          {
            label: "Project status",
            name: "status",
            widget: "select",
            hint: "What is the status of this project?",
            options: [
              {
                label: "In progress",
                value: "In progress",
              },
              {
                label: "Ongoing",
                value: "Ongoing",
              },
              {
                label: "Backlog",
                value: "Backlog",
              },
              {
                label: "Completed",
                value: "Completed",
              },
            ],
          },
          {
            label: "Body",
            name: "body",
            widget: "markdown",
          },
          {
            label: "Updates",
            name: "updates",
            widget: "list",
            collapsed: true,
            minimize_collapsed: false,
            summary: "{{fields.title}}",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Date",
                name: "date",
                widget: "datetime",
              },
              {
                label: "Category",
                name: "type",
                widget: "select",
                options: [
                  {
                    label: "Decision",
                    value: "decision",
                  },
                  {
                    label: "Update",
                    value: "update",
                  },
                  {
                    label: "Learning",
                    value: "learning",
                  },
                ],
              },
              {
                label: "Text",
                name: "text",
                widget: "markdown",
                editor_components: [],
                buttons: [
                  "bold",
                  "italic",
                  "link",
                  "numbered-list",
                  "bulleted-list",
                ],
              },
            ],
          },
          {
            label: "Related",
            name: "related",
            widget: "list",
            collapsed: false,
            minimize_collapsed: false,
            summary: "{{fields.title}}",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Links",
                name: "items",
                widget: "list",
                collapsed: false,
                minimize_collapsed: false,
                summary: "{{fields.text}}",
                fields: [
                  {
                    label: "Text",
                    name: "text",
                    widget: "string",
                  },
                  {
                    label: "URL",
                    name: "url",
                    widget: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

// gives the CMS preview window some custom CSS
CMS.registerPreviewStyle("/admin/preview.css");

// warning component
// https://design-system.service.gov.uk/components/warning-text/
CMS.registerEditorComponent({
  // Internal id of the component
  id: "details-component",
  // Visible label
  label: "Details component",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "summaryText",
      label: "Summary text",
      widget: "string",
    },
    {
      name: "text",
      label: "Text",
      widget: "markdown",
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern:
    /^{% govuk component="details", text="(.*?)", summaryText="(.*?)" %}$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    return {
      text: match[1],
      summaryText: match[2],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (params) {
    return `{% govuk component="details", text="${params.text}", summaryText="${params.summaryText}" %}`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (params) {
    return `<details><summary>${
      params.summaryText ? params.summaryText : "Summary text"
    }</summary>${params.text || ""}</details>`;
  },
});

// https://design-system.service.gov.uk/components/inset-text/
CMS.registerEditorComponent({
  id: "inset-text",
  label: "Inset text component",
  fields: [
    {
      name: "text",
      label: "Text",
      widget: "markdown",
    },
  ],
  pattern: /^{% govuk component="inset-text", text="(.*?)" %}$/ms,
  fromBlock: function (match) {
    return {
      text: match[1],
    };
  },
  toBlock: function (params) {
    return `{% govuk component="inset-text", text="${params.text}" %}`;
  },
  toPreview: function (params) {
    return `<div style="border-left: 5px solid #666; padding-left: 10px;">${
      params.text || ""
    }</div>`;
  },
});

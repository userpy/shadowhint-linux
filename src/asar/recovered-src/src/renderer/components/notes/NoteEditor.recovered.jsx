/*
 * Recovered from renderer webpack module 51028.
 * Inferred module name: NoteEditor.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 70369 (FormattedMarkdown)
 */

function NoteEditorWebpackModule(e, t, n) {
  "use strict";
  var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            ((o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o));
          }
        : function (e, t, n, r) {
            (void 0 === r && (r = n), (e[r] = t[n]));
          }),
    o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return (o(t, e), t);
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const a = n(40285),
    s = i(n(68329)),
    l = n(99163),
    c = n(70369);
  t.default = ({ note: e, onSave: t, onCancel: n, onDelete: r }) => {
    const { t: o } = (0, l.useTranslation)(),
      [i, d] = (0, s.useState)(e?.title || ""),
      [u, p] = (0, s.useState)(e?.content || "");
    return (
      (0, s.useEffect)(() => {
        e && (d(e.title), p(e.content));
      }, [e]),
      (0, a.jsxs)("div", {
        className: "note-editor",
        children: [
          (0, a.jsxs)("div", {
            className: "note-editor-header",
            children: [
              (0, a.jsx)("h2", {
                className: "note-editor-title",
                children: o(e ? "notes.edit" : "notes.createNew"),
              }),
              (0, a.jsx)("div", {
                className: "note-editor-actions",
                children: (0, a.jsx)("button", {
                  className: "note-editor-save-btn",
                  onClick: () => {
                    u.trim() && t(i, u);
                  },
                  disabled: !u.trim(),
                  children: o("notes.save"),
                }),
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "note-editor-field",
            children: (0, a.jsx)("input", {
              type: "text",
              className: "note-editor-title-input",
              placeholder: o("notes.noteTitle"),
              value: i,
              onChange: (e) => d(e.target.value),
            }),
          }),
          (0, a.jsxs)("div", {
            className: "note-editor-content with-preview",
            children: [
              (0, a.jsxs)("div", {
                className: "note-editor-textarea-container",
                children: [
                  (0, a.jsx)("textarea", {
                    className: "note-editor-textarea",
                    placeholder: o("notes.noteContent"),
                    value: u,
                    onChange: (e) => p(e.target.value),
                  }),
                  (0, a.jsx)("div", {
                    className: "note-editor-hint",
                    children: o("notes.latexHint"),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "note-editor-preview",
                children: [
                  (0, a.jsx)("div", {
                    className: "note-editor-preview-label",
                    children: o("notes.preview"),
                  }),
                  (0, a.jsx)("div", {
                    className: "note-editor-preview-content suggestion-text",
                    children: (0, c.formatTextWithHighlightedCode)(u),
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "note-editor-footer",
            children: [
              (0, a.jsx)("button", {
                className: "note-editor-cancel-btn",
                onClick: n,
                children: o("notes.cancel"),
              }),
              r &&
                (0, a.jsx)("button", {
                  className: "note-editor-delete-btn",
                  onClick: r,
                  children: o("notes.delete"),
                }),
            ],
          }),
        ],
      })
    );
  };
}

export default NoteEditorWebpackModule;

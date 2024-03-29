### Version 4.0.0 (Work in Progress)

#### Notable Changes

- bumped the minimum required Firefox version to Firefox 109, fixes
  [#2](https://github.com/cadeyrn/subtome/issues/2)

#### Dependencies

- updated eslint from version 8.5.0 to 8.34.0 and updated configuration
- updated eslint-plugin-compat from version 4.0.0 to 4.1.1
- updated eslint-plugin-no-unsanitized from version 4.0.1 to 4.0.2
- updated eslint-plugin-promise from version 6.0.0 to 6.1.1
- updated eslint-plugin-xss from version 0.1.11 to 0.1.12
- updated gulp-eslint-new from version 1.1.0 to 1.7.2
- updated jsdoc from version 3.6.7 to 4.0.0
- updated stylelint from version 14.2.0 to 15.1.0 and updated configuration
- updated stylelint-csstree-validator from version 2.0.0 to 2.1.0
- updated stylelint-order  from version 5.0.0 to 6.0.2
- updated webext from version 6.6.0 to 7.5.0

[All Changes](https://github.com/cadeyrn/subtome/compare/v3.1.0...master)

---

### [Version 3.1.0](https://github.com/cadeyrn/subtome/releases/tag/v3.1.0) (2021-12-23)

#### Notable Changes

- modernized the code base, fixed all linting issues based on new development standards
- bumped the minimum required Firefox version to Firefox 91

#### Dependencies

- updated webext from version 1.6.0 to 6.6.0
- setup all the development tools like htmllint, eslint, stylelint

[All Changes](https://github.com/cadeyrn/subtome/compare/v3.0...v3.1.0)<br />
[Download Signed WebExtension](https://addons.mozilla.org/en-US/firefox/addon/subtome-subscribe-button/versions/?page=1#version-3.1.0)

---

### Version 3.0 (26. Dezember 2016)

- komplette Neuentwicklung als WebExtension, damit auch mit Firefox 57 und höher kompatibel
- Umstellung der Entwicklungsumgebung von jpm auf web-ext (Version: 1.6.0)
- Es muss nicht länger auf den Button geklickt werden, um eine Meldung zu erhalten, dass eine Webseite keinen Feed
  bereitstellt. In einem solchen Fall wird nun direkt nach dem Laden des DOMs der Webseite der Button inaktiv gesetzt.
- Verbesserte Erkennung von Feeds auf Webseiten

### Version 2.1 (25. September 2016)

- Flag für Multiprozess-Kompatibilität (e10s) gesetzt
- Add-on-Beschreibung für deutschsprachige Version lokalisiert
- Minimum-Version von Firefox 24 auf Firefox 45 angehoben, Code zur Unterstützung älterer Versionen als Firefox 29
  entfernt
- Entwicklung umgestellt von cfx auf jpm (1.1.4)
- interne Code-Optimierungen

### Version 2.0 (13. April 2014)

- Kompiliert mit Add-on SDK 1.16
- Größere Teile des Codes überarbeitet und modernisiert
- Optimierung für Australis (Firefox 29+)
- Optimierung für HiDPI-Bildschirme

### Version 1.0.4 (12. Juli 2013)

- Liefere Erweiterung ohne SDK-APIs aus. Reduzierung der Dateigröße von 195KB auf 16KB. Erfordert mindestens Firefox 21.

### Version 1.0.3 (26. März 2013)

- SDK: Version 1.14

### Version 1.0.2 (15. März 2013)

- verwendet neues offizielles Symbol

### Version 1.0.1 (10. März 2013)

- erste Veröffentlichung (neue Versionsnummer wegen Problem auf AMO)

### Version 1.0 (10. März 2013)

- erste Veröffentlichung

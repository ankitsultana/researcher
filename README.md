# Researcher

### [Demo Website](http://ankitsultana.com/researcher)

A clean, single column, monospace resume template built for jekyll

### Installation

Simply fork the repository and edit away.

### Customization

* You can edit the `.md` (markdown) files as you see fit. You can also add some other markdown file, say `foo.md` in the root directory of the repository. It will then be accessible like so `{{ url of your website }}/foo`.

* You can of course remove `contact.md` if you don't want it

* To set the heading, edit the `title` variable in `_config.yml`

* To edit the `links` mentioned on the navigation bar, you can edit `_config.yml`. For example:

```
nav:
 - name: "About"
   link: "/researcher/"
 - name: "Resume"
   link: "resume.pdf"
 - name: "Contact"
   link: "contact"
```

* You can change the accent (color of hyperlinks) by editing the `accent` variable in `_sass/vars.scss`

* You can setup google analytics, by setting `tracking_id` in `_config.yml`

* To add a profile picture, make sure to give the image tag the class `profile-picture`. In other words,do it like so:

```html
<img class="profile-picture" src="sherlock.jpg">
```

* You can remove/customize the footer as you like by setting the
appropriate variables in `_config.yml`

**Note:** Customizing the accent color might cause merge conflicts if you later try to merge from `bk2dcradle/researcher` to fetch updates/patches etc. (applicable only if you have forked).

#### Installation (via remote themes)

* Just setting `remote_theme: ankitsultana/researcher@gem` in `_config.yml` should work. Although in that case, I am not sure how
you would build your site locally for testing. If you know how, open up an issue and let me know.
* For more info, [refer this](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/).

### License

[GNU GPL v3](https://github.com/bk2dcradle/researcher/blob/gh-pages/LICENSE)

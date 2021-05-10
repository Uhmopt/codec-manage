# Autokroma website

## Table of Contents

- [Around akWebsite : akWebsiteCD, Version.zip, Changelog.js](#akwebsitecd-automatic-aws-builds-ftp-upload-zip-archival-and-slack-commands)
- [Git workflow](#git-workflow)
- [Installation](#install)
- [Development](#development)
- [Deploy](#deploy)
- [Project structure](#structure)
- [How to edit/create blogposts](#blogposts)
- [How to edit/create products](#products)
- [Markdown/MDX manipulation](#markdown-formatting-inside-blog-posts)
- [Aescripts generation](#aescripts)
- [SEO](#seo)
- [How to fix twitter thumbnail error](#how-to-fix-twitter-thumbnails)

## Around akWebsite

### akWebsiteCD : Automatic AWS builds, FTP upload, zip archival and Slack commands

Any commit on branch X can be buit and uploaded on X.autokroma.com, two ways to do that :

- write "#build" somewhere in the commits message
- go to website_cd channel on Autokroma Slack (autokroma.slack.com), commands are :

  - /webbuild branch fullCommitID40chars
  - /webbuild branch will build the latest on this branch (git checkout branch)
  - For Antoine /weblist to get list of FTP builds uploaded
  - For Antoine /webwww buildFolder to change www to redirect to a given build folder listed in /weblist

Antoine controls www.autokroma.com for final publishing

website_cd_bot will give you lots of information about the build and final URL

BEWARE : for now it can only build one at a time, so don't write lots of #build message at the same time and don't launch a render if someone else is building one (look on Slack)

TODO: create influx branches and Gitlab hooks
TODO: multiple builds in parallel
TODO: each night automatic builds
akPlumePack/-/issues/195

### Version.zip

Change AfterCodecs.txt BRAW_Studio.txt PlumePack.txt
to the latest build number you want updated
and launch \_\_versions.bat to update the .zip

BEWARE : if you modify this for another plugin you don't control and you don't know what you're doing, you WILL trigger thousands of warning popups all over the world...

### Changelog.js

If all plugins git repo are in the same folde you only need to launch \_\_Update Changelog.bat to copy them to akWebsite
then you can update in config.js the two place where you can say what version you want to display
it is independent of the .zip version we distribute

Autokroma\akAfterCodecs
Autokroma\akBRAW_Studio
Autokroma\akPlumePack
Autokroma\akWebsite

BEWARE : before committing the change, delete the changelog .js you don't need
for example if you are updating PlumePack and have a BRAW Studio build locally and you don't have AfterCodecs repo
=> you should delete the BRAW Studio changelog.js and not erase the AfterCodecs changelog.js. Simply git discard those two to only keep the PlumePack change !

## Git workflow

- master branch for online releases, will merge from dev
- dev branch main development branch, will often merge back and from all other branches
- content branch for only content about the website, to separate it from the technical side (TODO: should we have a separate repository as a submodule ? might be easier to deal with !). Needs to be often merged from dev
- eugen development branch for Eugen work on the website, will merge to dev when features are finished and ready for testing by others. Needs to be often merged from dev. TODO will be updated there
- influx temporary branch for new plugin. to not be used anymore once plugin ready and launched

NOTE : always use "Merge-commit" to have a clean temporal history and each commits on its own branch, instead of something else that would mess up the whole git tree and logs (for example "fast forward" merges.. or rebase ?). For example if by mistake fast forward (or rebase ?) commit was commited but not pushed, cancel everything (with git commands OR easier by re cloning the whole repository again and copying node_modules and .next folder !)

## Install

Install git lfs: https://git-lfs.github.com/

```

sudo chown -R $USER /Users/dorni/.npm/ (I had to do that at some point)
$ npm install
sudo chown -R $USER /usr/local/lib/node_modules (I had to do that at some point)
$ npm install -g now@latest
```

If images are not there (129 bytes files), maybe you didn't have git lfs installed :

```
$ brew install git-lfs
$ git lfs fetch
```

## Development

```
$ npm run dev
```

Go to `localhost:3000`

To stop development server press CTRL + C on terminal.

In case of any unusual issues try to remove node_modules and re-install it using npm install command.

WARNING : if you change some metadata header of an article you might need to exit and restart. The content of the article is updated in real time, this is cool. Maybe if you add new images to the repo you might need to restart too

## Deploy

### Manually

```
$ npm run build
```

Sitemap will be automatically generated on build and stored in /out/sitemap.xml

WARNING : not very useful to look at the local files since it uses absolute links to autokroma.com

URL of images assets will be broken, URL of links too. There might be issues between / and /index.html default page since there is no Apache server

### On the server branch.autokroma.com or buildX.autokroma.com

See beginning of the document

#### Also deploy will be performed automatically after pushing to staging or master branch

NOT TRUE. But would be cool

### To prevent blog post from indexing (for example for testing purposes) you can set draft property on meta object to true

### Bundle analyzing

Run on terminal

```
$ npm run analyze-build
```

### Structure

The project is build using [Next.js](https://nextjs.org/docs), [React](https://reactjs.org/) and [MDX](https://mdxjs.com/)

1. Pages. All files under /pages folter will transform to html route in final bundle. So /pages/Contact.js will transform into SITE_URL/Contact
2. Components. Small reusable pieces that can be imported to pages as .js as .mdx
3. Static. Used for static file serving (e.g images) DON'T REMOVE IMAGES FROM HERE. They're used for aescripts html generation.
4. config. js file with some configuration, for example _author_, _sitename_ are used for html head generation. Will be extended in the future.

All pages are rendered into static HTML. Result is listed in next.config.js _exportPathMap_ function. Also for dynamic pages (like User_Guide/q.js) getStaticPaths hook is used. When next.js build application it goes through all custom getStaticPaths functions and merge it with exportPathMap. This way we can control what pages are in final build.

We don't use any of React/Next.js code in build for DOM manipulation we're using vanilla, so I remove React/next.js in \_document.js. I wrote a CustomHead that removes all preload links. There all native js scripts are included.

### Styles

[Styled components](https://www.styled-components.com/) and [Rebass](https://rebassjs.org/) are used for styling components.

example:

```
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Wrapper = styled(Flex)`
    <!-- here goes regular scss -->

    width: 100%;
`;
```

### Images

For your images, you can just drop them in the `/static` folder. They will be optimized by webpack and next.js.

Change configuration of image optimization in next.config.js

```
module.exports = withPlugins([
    ...,
    [
        optimizedImage, {
            // config
        }
    ],
    ...
])

```

list of possible options: https://github.com/cyrilwanner/next-optimized-images#configuration

to configure jpeg image optimization change mozjpeg object. List of options: https://github.com/imagemin/imagemin-mozjpeg

to configure png image optimization change optipng object. List of options: https://github.com/imagemin/imagemin-optipng

to configure gifs image optimization change gifsicle object. List of options: https://github.com/imagemin/imagemin-gifsicle

### Disable image optimizations

Set property _optimizeImages_ to false on next.config.js.

### Content and pages

all /pages except \_app and \_document are generated into static pages. \_app and \_document used for Wrapping all pages in some way.
/content is for generating html for aescripts and i’m using the same content on Overview page of each plugin.

### Create ZIP of your bundle

To create zip archive with build -> run `npm run zip` on terminal. The results archive will be under /zip route.

## Blogposts

### How to add new blog post

1. Copy any post inside of /pages/blog folder
2. Change the name of the file.
3. Change the content of the file. Important to keep the same structure.

### How to hide blogpost

To hide blogpost add property hidden to meta object inside blogpost mdx file. Take a look at 0_How-To-Crack-AfterCodecs-Safely.mdx. Blog post still will be accesible by filename route. But will be hidden from public blogpost list.

### Create a new blog post manually

Copy paste a .mdx file in pages/blog and rename, change meta object in export

```
<BlogImage src={require("path_to_image_in_static_folder")} alt="Alternate text" />
```

You can use custom React components or html snippets in .mdx files. Start from new line. You can't mix regular markdown Syntax and html.

### To add lastUpdated sublabel and correct og tag

Add lastUpdated property to blog post meta object inside mdx file

### Limit number of blog posts to be shown on main page

Change _numberOfBlogpostToShowOnMainPage_ property on main config. /config/index.js

### Poster (thumbnail)

Aspect 1.8
Best resolution would be 432x240

TODO: automatic generation of 2x

### Disable Read other articles button.

Set _hideReadMoreButton_ to true on blog post meta object.

### How to change blog images props

Commit with changes: https://gitlab.com/Autokroma/akWebsite/commit/806b810217e8a35ab452e3a83ebc0359cf1cce67

Currently we have _hasShadow_ and _scaledDown_ properties.

Example of usage:

```
<BlogImage hasShadow scaledDown />
```

To add new properties open Image.js and add new function

```
${props =>
    props.YOUR_NEW_PROP_NAME &&
    css`
      CSS_RELATED_TO_PROP
    `}
```

To have two images side by side pass src to BlogImage component as array.

```
<BlogImage src={[require("static/image1"), require("static/image2")]} />
```

### Floating text inside of BlogImage

You can pass text inside of BlogImage component. It will be rendered to the right side of image.

Example:

```
<BlogImage src="...">Text to the right</BlogImage>
```

With text inside of BlogImage it's possible to specify width of the image on the desktop. Useful with vertical images.

Example

```
<BlogImage width="150px">Text to the right</BlogImage>
```

configuration params:

textPosition: 'right' | 'left'; ('right' by default)
float: boolean (false by default)
textCard: boolean (false by default)

Example:

```
<BlogImage float textPosition="left">Text inside of the label</BlogImage>
```

### PlatformOnly components

There are two components to hide/show platform specific content: _MacOnly_ and _WindowsOnly_.

Example of usage:

```
<MacOnly>
  Content that need to be shown on Mac. Windows users can expand it.
</MacOnly>
```

Component has _strict_ property, to disable expanding for different platform users.

Example:

```
<MacOnly strict>
  Content will be visible only for Mac users. Windows users won't be able for expand it.
</MacOnly>
```

_WindowsOnly_ component supports _strict_ prop as well.

### Draft and hidden

You can control blog post visibility with draft and hidden props on meta object.

_draft_ hide post for google indexation and from blog post list.

_hidden_ hide post from blog post list but allow google to index that post.

When _draft_ property overrides _hidden_ property.

### Create blog piece that can be inserted on any blog post

Create a file under /components/BlogPieces/\*.mdx. Or simply copy one of the existing files, and change its name. After that import mdx file in components/markdown.js and add it to export, line 41.

```
import AfterCodecsBestFeatures from "./BlogPieces/AfterCodecsBestFeatures.mdx";

...

export default {
  ...,

  AfterCodecsBestFeatures: AfterCodecsBestFeatures
}
```

After that _AfterCodecsBestFeatures_ can be used as shared component on all blog posts. Example:

```
Braw_studio_prestes.mdx

Mdx content

<AfterCodecsFeatures />

Mdx content
```

### Set first item in product carousel

Set _firstInCarousel_ to true on product meta object. (/AfterCodecs/index.mdx, /BRAW_Studio/index.mdx, etc) Don't forget to set to false on current product.

## Products

### Products screenshots

To change product screenshot change file /config/index.js. To add new image, add to array AfterCodecsScreenshots or BRAWStudioScreenshots (or corresponding to next plugin array) object with signature

```
{
    image: require(IMAGE_PATH),
    title: DESCRIPTION_UNDER_IMAGE
}
```

## _Important!!!_

Don't forget to require image. Without it screenshot plugin will not work. It's needed for optimization and lazy loading of images.

Example of how to do it: https://gitlab.com/Autokroma/akWebsite/commit/253315740f1f339a809366716f2a0791d61e3fb5#aa8a70fc9f39394872921561977e736d2ac97a3c_30_31

### Store link

To change link that points to store, change storeLink property in /config/index.js

### Change changelog visible version

Change variables brawStudioChangelogVersion and afterCodecsChangelogVersion in config/index.js. To show all changes including beta set 'beta' as value of the variable. TODO #75

### How to add new plugin

1. Copy /AfterCodecs folder inside of /pages.
2. Change name of folder to expected product url. Url will be the same as the product name.
3. Add new folder name to data/\_products array in get-products.js file, line 4.

```
const _products = ["AfterCodecs", "BRAW_Studio", "NEW_PLUGIN_FOLDER_NAME"];
```

4. Change the content of new folder files. Important that product subpages should have the same structure as in existing ones. Each index.mdx file should export const meta = {}; It's used for SEO and subpages population.

## Markdown / formatting inside blog posts

_Don't forget to import React components at the top of the file_

Take a look at MDX_EXAMPLE.mdx file at the root of the project. Here's the list of mdx code examples.

About `<Link>`
Everything that looks like a relative path will be transformed into next.js links. for example `<Link href={“/search”}>Link Title</Link>`
But `<Link href={“https://google.com”}>Google</Link>` will be transformed into absolute links.

List of all components support in mdx files is listed in markdown.js.

## HTML inside of MDX files

HTML is valid inside of MDX files. Only difference in styles. In plain html you use:

`<div style="font-size: 125%"></div>`

In MDX you should use React-way:

```
    <div style={{ fontSize: "125%" }}></div>
```

so all style properties divided by - transform into camelCase

font-size => fontSize, etc.

## Aescripts

### To generate pages for aescripts

```
npm run generate-for-aescripts
```

Result files will be under /aescripts folder.

### How to add specific styles for aescripts

1. Open `genereate-for-aescripts.js` file.
2. Find `const aescriptsCSS` variable.
3. Change or update css string with desired one.
4. `npm run generate-for-aescripts`

### How to add HTML content in generated files

There are two ways.

Generic for all plugins:

1. Open `genereate-for-aescripts.js` file.
2. Find `const html = renderToStaticMarkup(` line.
3. Change HTML content

Before

```
<>
    <Comp mainColor={mainColor} generateForAescripts={true}></Comp>
</>
```

After

```
<>
    <div>Html Before</div>
    <Comp mainColor={mainColor} generateForAescripts={true}>
        <div>HTML Inside Features and Tech Specs</div>
    </Comp>
    <div>HTML After</div>
</>
```

Specific for each plugin:

1. Open Overview.js corresponding to plugin you want to change. For AfterCodecs open /components/content/AfterCodecs/Overview.js
2. Find default export function at the bottom of the file.

Example of content:

Before

```
export default props => (
  <>
    <Features
      mainColor={props.mainColor}
      assetPrefix={props.generateForAescripts ? "https://autokroma.com" : ""}
    />
    {props.children}
    <TechnicalSpecs mainColor={props.mainColor} />
  </>
);
```

After

```
export default props => (
  <>
    <div>HTML Before Features that will be generated only on AfterCodecs page</div>
    <Features
      mainColor={props.mainColor}
      assetPrefix={props.generateForAescripts ? "https://autokroma.com" : ""}
    />
    {props.children}
    <div>HTML Between Features and Tech Specs that will be generated on AfterCodecs page</div>
    <TechnicalSpecs mainColor={props.mainColor} />
    <div>HTML After TechnicalSpecs that will be generated only on AfterCodecs page</div>
    <>
  </>
);

```

You can combine both methods.

### How it works

We use react-server _renderToStaticMarkup_ method. It's using in SSR (we don't have it). Basically it builds react application and then extract static markup from it without scripts or css. After that I'm using styled-components library to collect all stylesheets from build application and merge static html string and extracted css.

## SEO

### Head.js component

All tags (including OG metagata) are generated in here. To change keywords for SEO modify _keywordsForSeo_ on config/index.js

### Google analytics

Google analytics script is added automatically. To change google analytics id - change googleAnalytics property on global config object. (/config/index.js)

## Global stylings props

### To change main text color

Open component/Text.js and change value of passing prop on 5th line.

```
color="rgba(0,0,0,0.8)
```

to any value supported by css. (#000, #000000, black...)

## Product lander

https://www.figma.com/file/f4rVd3OH06SoSYqS9h40Gb/Autokroma-Redesign?node-id=535%3A2
I generate images for products in here.
I created Product Lander Image page with image (find the page in the right sidenav). And detailed steps. Tell me if it’s still something missing for you

## How to fix twitter thumbnails

The Twitter cache is very slow updated (up to one week). So if you have a problem with the thumbnail you should:

- https://cards-dev.twitter.com/validator
- Paste url of page
- add ?utm_source=Whatever to the end of the url
- Press preview card => cache will be updated and you'll see the image.

## Folder structure

/aescripts - html code generated from "npm run generate-for-aescripts"
/assets - all static content should be stored there expect images for aescripts, since urls are specified globally
/components - reusable code pieces, before using it in /pages should be injected at the top of the file
/files_to_copy - files that on postbuild phase are copied to build folder
/pages - static html pages are generated from js and mdx files here
/public - same as /assets but store it globally, need it for aescripts
/store - TODO
/utils - reusable js scripts

### Next.js work (Legacy, we don't use next.js anymore)

next.js uses webpack under the hood, it goes through all files we have, tries to extract pieces that could be called several times and put it into commons.[hash].js. Uses hashes for caching. In commons goes all components, node_modules libs, small images that uses withing different components.
Also it bundles all /pages with specific code. it’s not too much code as you can see on diagram, the biggest module is commons.js, that’s good, it means user don’t need to load big js file on each page.
How next.js static export works: next.js supposed to be used within server. But you can use it without one. It simple pre-render all /pages into html and include react into it. For example on product page we have javascript code inside of the component, that works on node.js, but caused a bug in safari. HTML is already pre-rendered, so you can turn off javascript and website will still work. But for dynamic features as carousel, faq, it needs javascript. There is no way to extract specific that javascript, it injects whole react components into final html.
Important thing to notice, when you use next.js with server, it still render pages that could be statically rendered (doesn’t use any dynamic data) into static html.
Problem is what you expect from static html is completely static without any js, but next.js adds a lot of stuff, like dynamic routing, links preloading on top of that.
next.js is server-side rendering framework.
So imaging you have some component /Contact.js that should render contact form. How it works for user. User send a request on contact url. Server render this page and return html with react and this component. Browser render this html and load js. After react loaded it build shadow dom of component. Compare it to one already rendered, it shouldn’t be any difference. If there is a difference update a dom. So react code, calls on client and on server. But because of main render occurs on server => we don’t have problem with SEO and site works for users without javascript at all.
In our case with safari bug what happened. Server rendered correctly html, return it to Safari. Safari rendered the html to the user, but on step with comparing shadow dom and real dom error occurs. That’s why js should be valid both in server and client.
there is a way to have some js that will execute only on server. getInitialProps I should put that changelog transformation into this.
6:28
you may wonder, why do we need that step with comparing shadow and real dom, that’s how react works and it’s a big revolution. Because earlier all rendering was happened on client side. So basically every SPA app was looking like
`<div id=app></div>`
`<script src="big script"></script>`
and after that tons of client code executes, send request, etc.
With ssr it renders everything on server and use client code only for updating dom and dynamic features.
Currently server returns you pre-rendered html and small amount of js.
we export the result of SSR to /out folder.
So the script and html that you have in out folder is what you’ll get using SSR.
And even when you have real server, some pages will be exported as static. It called hybrid app. Server won’t render them each time.
And preloading is on next.js. It adds script preload where it needed, and each time you click on link it navigate you using their strategy, not browser default.
Existing example:
We have /pages/blog/[tag].js.
[] - part for next.js means that this page is dynamic and depends on query params.
How I handle this now, I go through all tags we have on build phase. And render each tag to html file. You can see it in out folder, I have separate folder for each tag. So when user tries to access /tag browser returns him pre-rendered html.
How this will be handled with SSR. When user navigates to /tag url. He sends request to the server, server renders html from React component (/blog/[tag].js) and return the same html as in first case to the end user.
So the end user will feel it like static website in both cases. SSR render application on server side and return ready html for the user.
what’s inside the .js - Webpack bundle it. It simply goes over application, collect all dependencies we use, and put them in big chunk. also it creates small chunk for each page. Next.js hides that from developer, but you always can customize webpack configuration, add loaders for svg for example. so if you see that your client bundle is too big you can run npm run analyze-build and see maybe something unnecessary is in your build

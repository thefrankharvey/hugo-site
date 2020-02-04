## Summary
- Overall, the most painstaking parts were:
    - Acclimating to and incorporating the Go templating paradigm 
    - The boilerplate file structure and setup for Sass integration
        - After some frustrating periods this youtube video was of great help:
            - https://www.youtube.com/watch?v=NKLwuZIkReg&t=235s

## SASS/SCSS integration issue
- I did not intially include these dependcies which I read need to be included to compile scss
    - "autoprefixer": "^9.7.4"
    - "postcss-cli": "^7.1.0"
    - Installed with npm
- Must create assets/ folder
    - Move css files from the static/ folder to assets/
    - Rename .css files to .scss
- Include the stylesheet in the HTML head using Hugo Pipes (as opposed to the traditional stylesheet link)
    ` 
    {{ $style := resources.Get "css/main.scss" }}
    {{ $style = $style | toCSS | minify | fingerprint }}
    <link rel="stylesheet" href="{{ $style.Permalink }}">
    `
    - Will require more research and experimentation to get comfortable with the above paradigm

### Inluding packages in script.js file
"bootstrap": "^4.4.1",
"jquery": "^3.4.1",
"popper.js": "^1.16.1"

- In order to include the script.js file which imported these packages use:
    - `<script src="script.js"></script>`
    - instead of
    - `<script src="./static/script.js"></script>`

- It seems like Hugo is pretty smart and knows how to look for filenames with out including a relative path
- It throws errors if you underestimate its intelligence by being overly verbose
- This had me stuck a few times

### Learning curves with Go templating language
- doing things in this fashion that I would normally do in React/Javascript
    - Such as `
    {{ range .Pages }}
        <li class="nav-li-{{ .Params.title }}"><a href="{{ .Permalink }}">{{ .Title}}</a></li>
    {{ end }}
    `
- Simply linking files
    
### Partials
- Partials are awesome
    - Similar vein of the idea behind React components
    - Breaking things down into smallers chunks for code reuse and encapsulation, organization
-Time permitting I'd like to utilize these more in this project

### Publishing this wiki as a page
- Hugo, like Gatsby, can programmatically render markdown files as pages/routes
- Time permitting I'd like to incorporate this functionality as www.site.com/wiki

<!--
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. -->

<!-- The page will reload if you make edits.<br />
You will also see any lint errors in the console. -->

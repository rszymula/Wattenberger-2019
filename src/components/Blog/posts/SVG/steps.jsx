import React from 'react'
import * as d3 from "d3"
import rasterCircle from "./raster-circle.png"
import vectorCircle from "./circle.svg"
import SVGElement from "./SVGElement"
import SVGExercise from "./SVGExercise"

// eslint-disable-next-line import/no-webpack-loader-syntax
const faceCode = require("!!raw-loader!./face.html").default
// eslint-disable-next-line import/no-webpack-loader-syntax
const gradientCode = require("!!raw-loader!./gradient.html").default

const faceParts = {
    svgStyle: [8, 13],
    grid: [9, 10, 11],
    border: [12],
    ear1: d3.range(15, 21),
    ear2: d3.range(21, 27),
    head: d3.range(27, 36),
    eye1: d3.range(37, 49),
    eyegroup: [36, 49],
    eye2: d3.range(50, 54),
    snout: d3.range(54, 60),
    nose: d3.range(60, 66),
    bowtie: d3.range(66, 76),
    mouth: d3.range(76, 108),

    pathL: d3.range(96, 102),
    pathC: d3.range(90, 96),
    pathQ: d3.range(85, 90),
    pathA: d3.range(77, 85),
}
const allLines = [
    ...faceParts.svgStyle,
    ...faceParts.grid,
    ...faceParts.border,
    ...faceParts.ear1,
    ...faceParts.ear2,
    ...faceParts.head,
    ...faceParts.eye1,
    ...faceParts.eyegroup,
    ...faceParts.eye2,
    ...faceParts.snout,
    ...faceParts.nose,
    ...faceParts.bowtie,
    ...faceParts.mouth,
]

export default [{
    title: <>Welcome! 👋</>,
    description: <>
        <p>
            Clone the exercise repo at:
            <h2 style={{margin: "10px 0", padding: 0, fontSize: "2em"}}>github.com/Wattenberger/svg-workshop</h2>
        </p>

    </>,
},{
    title: "What is SVG?",
    description: <>
        <h3>Scalable Vector Graphics</h3>
        <p>
            <b>MDN</b>:
            <br />
            an XML-based markup language for describing two dimensional based  vector graphics
        </p>
        <p>
            HTML : text :: SVG : graphics
        </p>
        <div style={{
            display: "flex",
            width: "100px",
        }}>
            <img style={{width: "50%", height: "50%"}} src={rasterCircle} />
            <img style={{width: "50%", height: "50%"}} src={vectorCircle} />
            {/* <svg width="50%" height="50%" viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="4" fill="none" stroke="cornflowerblue" strokeWidth="0.5" />
            </svg> */}
        </div>
        <p>
            One of these circles is raster (300,000B), one is vector (200B).
        </p>

        <p>
            You can see the file size gains represented in the evolution of icons on the web.
            <br />
            <a href="https://github.com/Wattenberger/Wattenberger-2019/blob/master/src/components/_ui/Icon/Icon.jsx" target="_blank">
                My current setup
            </a>
        </p>

        <b>Pros</b>
        <ul>
            <li>
                Smaller file size
            </li>
            <li>
                Infinitely scaleable
            </li>
            <li>
                Update the colors
            </li>
            <li>
                Animations/transitions
            </li>
            <li>
                Fun fiters
            </li>
            <li>
                Accessibility
            </li>
        </ul>
        <b>Cons</b>
        <ul>
            <li>
                Not always appropriate (eg.photo)
            </li>
        </ul>
    </>,
},{
    title: "What can I do with SVG?",
    description: <>
        <p>
        </p>
        <ul>
            <li>
                <a href="http://localhost:8080/resources/inspiration.html" target="_blank" rel="noopener noreferrer">
                    Inspiration
                </a>
            </li><li>
                <a href="http://wattenberger.com/sketches?day=25" target="_blank" rel="noopener noreferrer">
                    Sketches
                </a>
            </li><li>
                <a href="https://currents.parsely.com/election" target="_blank" rel="noopener noreferrer">
                    Data visualization
                </a>
            </li><li>
                <a href="https://currents.parsely.com/info/cat:Law%2C-Gov%E2%80%99t-%26-Politics?from=2019-08-14&to=2019-08-14&share-token=ea9eb42f858c4c51021cyc" target="_blank" rel="noopener noreferrer">
                    Misc
                </a>
            </li><li>
                <a href="https://wattenberger.com/fishing" target="_blank" rel="noopener noreferrer">
                    Data visualization
                </a>
            </li><li>
                <a href="https://wattenberger.com/wdvp" target="_blank" rel="noopener noreferrer">
                    Interactive maps
                </a>
            </li><li>
                <a href="https://tympanus.net/Development/PageLoadingEffects/index11.html" target="_blank" rel="noopener noreferrer">
                    Page loaders
                </a>
            </li><li>
                <a href="https://tympanus.net/Development/CardExpansion/index4.html" target="_blank" rel="noopener noreferrer">
                    Page transitions
                </a>
            </li><li>
                <a href="https://tympanus.net/Development/ElasticSVGElements/collapseexpand.html" target="_blank" rel="noopener noreferrer">
                    Element transitions
                </a>
            </li><li>
                <a href="https://tympanus.net/Development/AnimatedCheckboxes/" target="_blank" rel="noopener noreferrer">
                    Loaders
                </a>
            </li><li>
                Snake?
            </li>
        </ul>
    </>,
},{
    title: "<svg>",
    notes: <>
        <SVGElement name="svg" />
    </>,
    code: faceCode,
    highlightedLines: [4,5,6],
    removedLines: [
        5, 6, 7,
        ...allLines,
    ],
},{
    title: "<svg>",
    notes: <>
        <SVGElement name="svg" />
    </>,
    code: faceCode,
    highlightedLines: [6],
    removedLines: [
        5,6,7,
        ...faceParts.grid,
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.head,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<svg>",
    notes: <>
        <b>
            Style specificity
        </b>

        <ul>
            <li>CSS style with !important selector</li>
            <li>Inline style</li>
            <li>CSS style</li>
            <li>HTML (presentational) attribute</li>
            <li>Browser default</li>
        </ul>


        <SVGElement name="svg" />
    </>,
    code: faceCode,
    highlightedLines: [5,6],
    removedLines: [
        7,
        ...faceParts.grid,
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.head,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<svg>",
    notes: <>
        <SVGElement name="svg" />
    </>,
    code: faceCode,
    highlightedLines: [7],
    removedLines: [
        ...faceParts.grid,
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.head,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "Adding a grid",
    code: faceCode,
    highlightedLines: faceParts.grid,
    removedLines: [
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.head,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<rect>",
    notes: <>
        <SVGElement name="rect" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(15, 21),
    removedLines: [
        34, // fill
        30, 31, // rx, ry
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<rect> - rx, ry",
    notes: <>
        <img src="https://www.princexml.com/images/doc-10//rect.png" />
        <br />
        <SVGElement name="rect" />
    </>,
    code: faceCode,
    highlightedLines: [18, 19],
    removedLines: [
        34, // fill
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "Background color",
    code: faceCode,
    highlightedLines: [22],
    removedLines: [
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<circle>",
    notes: <>
        <SVGElement name="circle" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(24, 30),
    insertedLines: [{
        start: 23,
        code: `            <circle
                cx="1"
                cy="3"
                r="1"
                fill="darkSlateBlue"
            />`
    }],
    removedLines: [
        ...faceParts.ear1,
        ...faceParts.ear2,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<circle>",
    notes: <>
        <SVGElement name="circle" />
    </>,
    code: faceCode,
    highlightedLines: faceParts.ear1,
    removedLines: [
        ...faceParts.ear2,
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<circle>",
    notes: <>
        <SVGElement name="circle" />
    </>,
    code: faceCode,
    highlightedLines: faceParts.ear2,
    removedLines: [
        ...faceParts.eye1,
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<ellipse>",
    notes: <>
        <SVGElement name="ellipse" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(36, 42),
    removedLines: [
        ...d3.range(42,48),
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<ellipse>",
    notes: <>
        <SVGElement name="ellipse" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(42, 48),
    removedLines: [
        ...faceParts.eyegroup,
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "Your turn!",
    description: <>
        Let's flip over to our local code and open up our first exercise!
        <SVGExercise index="1" />

        <SVGElement name="rect" />
        <SVGElement name="circle" />
        <SVGElement name="ellipse" />

    </>,
},{
    title: "<g> (group)",
    notes: <>
        <p>
            div : HTML :: g : SVG
        </p>
        <p>
            Useful for organization, transformations, & reference
        </p>
        <SVGElement name="g" />
    </>,
    code: faceCode,
    highlightedLines: faceParts.eyegroup,
    removedLines: [
        ...faceParts.eye2,
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<use>",
    notes: <>
        <SVGElement name="use" />
    </>,
    code: faceCode,
    highlightedLines: faceParts.eye2,
    removedLines: [
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<defs> (definitions)",
    notes: <>
        <SVGElement name="defs" />
    </>,
    code: faceCode,
    highlightedLines: [36, 51],
    insertedLines: [{
        start: 35,
        code: `          <defs>`
    },{
        start: 50,
        code: `          </defs>`
    }],
    removedLines: [
        ...faceParts.snout,
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "Let's make multiple trains!",
},{
    title: "Adding a snout",
    code: faceCode,
    highlightedLines: faceParts.snout,
    removedLines: [
        ...faceParts.nose,
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "Adding a snout",
    code: faceCode,
    highlightedLines: faceParts.nose,
    removedLines: [
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<line>",
    notes: <>
        <SVGElement name="line" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(66, 73),
    insertedLines: [{
        start: 65,
        code: `            <line
              x1="1"
              y1="1"
              x2="9"
              y2="6"
              stroke="pink"
          />`
    }],
    removedLines: [
        ...faceParts.bowtie,
        ...faceParts.mouth,
    ],
},{
    title: "<polyline>",
    notes: <>
        <SVGElement name="polyline" />
    </>,
    code: faceCode,
    highlightedLines: [68],
    removedLines: [
        66, 69, 70, 71, 72,
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 65,
        code: `            <polyline`
    },{
        start: 70,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polyline>",
    notes: <>
        <SVGElement name="polyline" />
    </>,
    code: faceCode,
    highlightedLines: [69],
    removedLines: [
        66,
        70, 71, 72,
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 65,
        code: `            <polyline`
    },{
        start: 71,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polyline>",
    notes: <>
        <SVGElement name="polyline" />
    </>,
    code: faceCode,
    highlightedLines: [70],
    removedLines: [
        66,
        71, 72,
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 65,
        code: `            <polyline`
    },{
        start: 72,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polyline>",
    notes: <>
        <SVGElement name="polyline" />
    </>,
    code: faceCode,
    highlightedLines: [71],
    removedLines: [
        66,
        72,
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 65,
        code: `            <polyline`
    },{
        start: 73,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polyline>",
    notes: <>
        <SVGElement name="polyline" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(68, 73),
    removedLines: [
        66,
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 65,
        code: `            <polyline`
    },{
        start: 74,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polygon>",
    notes: <>
        <SVGElement name="polygon" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(68, 73),
    removedLines: [
        ...faceParts.mouth,
    ],
    insertedLines: [{
        start: 74,
        code: `                stroke="blue"
                stroke-width="0.5"`
    }],
},{
    title: "<polygon>",
    notes: <>
        <SVGElement name="polygon" />
    </>,
    code: faceCode,
    // highlightedLines: d3.range(68, 73),
    removedLines: [
        ...faceParts.mouth,
    ],
},{
    title: "<path>",
    notes: <>
        <img src="http://pythonturtle.org/images/screenshot.gif" />
        <br />
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(77, 79),
    removedLines: [
        105, 106, // line-
        97, 98, 99, 100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>M</u>ove to</>,
    notes: <>
        <img src="http://pythonturtle.org/images/screenshot.gif" />
        <br />
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 79),
    removedLines: [
        105, 106, // line-
        98, 99, 100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>L</u>ine to</>,
    notes: <>
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 80),
    removedLines: [
        105, 106, // line-
        99, 100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>L</u>ine to</>,
    notes: <>
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 81),
    removedLines: [
        105, 106, // line-
        100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: "Round stroke corners",
    notes: <>
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: [85],
    removedLines: [
        105,
        100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: "Round stroke caps",
    notes: <>
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: [86],
    removedLines: [
        100,
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>Z</u> finish</>,
    notes: <>
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 82),
    removedLines: [
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>C</u>ubic curve to</>,
    notes: <>
        <h2 style={{margin: "0 0 1em"}}>
            [control1] [control2] [end]
        </h2>
        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/09/1410417291curve1.png" />
        <div className="note">From https://www.sitepoint.com/closer-look-svg-path-data/</div>
        <br />
        <a href="http://roadtolarissa.com/blog/2015/02/22/svg-path-strings/" target="_blank" rel="noopener noreferrer">
            SVG Path Strings
        </a> by Adam Pearce
        <br />
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 82),
    removedLines: [
        ...faceParts.pathL,
        ...faceParts.pathQ,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>Q</u>uad curve to</>,
    notes: <>
        <h2 style={{margin: "0 0 1em"}}>
            [control] [end]
        </h2>
        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/09/1410417294curve2.png" />
        <div className="note">From https://www.sitepoint.com/closer-look-svg-path-data/</div>
        <br />
        <SVGElement name="path" />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 81),
    removedLines: [
        ...faceParts.pathL,
        ...faceParts.pathC,
        ...faceParts.pathA,
    ],
},{
    title: <>{"<path>"} - <u>A</u>rc to</>,
    notes: <>
        <h2 style={{margin: "0 0 1em"}}>
            [radius] angle large-arc-flag sweep-flag [end]
        </h2>
        <SVGElement name="path" />
        <br />

        <iframe height="265" style={{width: "100%", height: "500px"}} scrolling="no" title="svg arc demo" src="//codepen.io/lingtalfi/embed/yaLWJG/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/lingtalfi/pen/yaLWJG/'>svg arc demo</a> by lingtalfi
            (<a href='https://codepen.io/lingtalfi'>@lingtalfi</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

        <br />
        <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/09/1410417287curve3.png" />
        <div className="note">From https://www.sitepoint.com/closer-look-svg-path-data/</div>
        <br />
    </>,
    code: faceCode,
    highlightedLines: d3.range(78, 84),
    removedLines: [
        ...faceParts.pathC,
        ...faceParts.pathQ,
        ...faceParts.pathL,
    ],
},{
    title: "Your turn!",
    description: <>
        Let's start our next exercise:
        <SVGExercise index="2" />

        <SVGElement name="rect" />
        <SVGElement name="circle" />
        <SVGElement name="ellipse" />
        <SVGElement name="line" />
        <SVGElement name="polyline" />
        <SVGElement name="polygon" />
        <SVGElement name="path" />
    </>,
},{
    title: "<linearGradient>",
    notes: <>
        <SVGElement name="linearGradient" />
    </>,
    code: gradientCode,
    highlightedLines: [10, 11, 12, 13, 28],
    removedLines: [
        ...d3.range(13, 16), // stop1
        ...d3.range(16, 20), // stop2
        ...d3.range(20, 24), // stop3
    ],
},{
    title: "<stop>",
    notes: <>
        <SVGElement name="stop" />
    </>,
    code: gradientCode,
    highlightedLines: [13, 14, 15],
    removedLines: [
        ...d3.range(16, 20), // stop2
        ...d3.range(20, 24), // stop3
    ],
},{
    title: "<stop>",
    notes: <>
        <SVGElement name="stop" />
    </>,
    code: gradientCode,
    highlightedLines: [16, 17, 18],
    removedLines: [
        18,
        ...d3.range(20, 24), // stop3
    ],
},{
    title: "<stop>",
    notes: <>
        <SVGElement name="stop" />
    </>,
    code: gradientCode,
    highlightedLines: [18],
    removedLines: [
        ...d3.range(20, 24), // stop3
    ],
},{
    title: "<stop>",
    notes: <>
        <SVGElement name="stop" />
    </>,
    code: gradientCode,
    highlightedLines: [20, 21, 22, 23],
    removedLines: [
    ],
},{
    title: "<text>",
    notes: <>
        <SVGElement name="text" />
    </>,
    code: gradientCode,
    highlightedLines: d3.range(34, 44),
    insertedLines: [{
        start: 33,
        code: `      <text
          x="75"
          y="200"
          style="
            font-size: 100px;
            fill: white;
          "
        >
          HELLO
        </text>`
    }],
    removedLines: [
    ],
}]
// scaling
// transforming
// gradients
// text
// clip paths & masks (star rating example?)
// filters
// using in real life - show react Icon?
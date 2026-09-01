import * as React from "react"
const Sparkle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <g fillOpacity={0.8} filter="url(#a)">
            <path
                fill="url(#b)"
                d="M8.805 4.225c.26.038.26.512 0 .55-2.816.406-3.624 1.214-4.03 4.03-.038.26-.512.26-.55 0C3.82 5.99 3.011 5.181.195 4.775c-.26-.038-.26-.512 0-.55C3.01 3.82 3.819 3.011 4.225.195c.038-.26.512-.26.55 0 .406 2.816 1.214 3.624 4.03 4.03Z"
            />
            <path
                fill="url(#c)"
                d="M19.452 8.839c.367.055.367.75 0 .806-3.983.596-5.125 1.78-5.7 5.913-.053.381-.724.381-.777 0-.574-4.132-1.716-5.317-5.7-5.913-.367-.055-.367-.751 0-.806 3.984-.597 5.126-1.781 5.7-5.914.053-.38.724-.38.777 0 .575 4.133 1.717 5.317 5.7 5.914Z"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={-1.44}
                x2={6.559}
                y1={-9.643}
                y2={8.07}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#9AB6FA" />
                <stop offset={1} stopColor="#F7F8F9" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={4.964}
                x2={16.983}
                y1={-11.508}
                y2={14.148}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#9AB6FA" />
                <stop offset={1} stopColor="#F7F8F9" />
            </linearGradient>
            <filter
                id="a"
                width={19.727}
                height={16.844}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={1} />
                <feGaussianBlur stdDeviation={1} />
                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
                <feBlend in2="shape" result="effect1_innerShadow_11642_1076" />
            </filter>
        </defs>
    </svg>
)
export default Sparkle

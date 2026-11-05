import "./AvionSVG.scss"

export default function AvionSVG({ isActive = false }) {
  return (
    <div className={`container-avion${isActive ? ' is-active' : ''}`}>
      <svg
        version="1.1"
        id="avion-main-svg"
        className="avion-svg"
        xmlSpace="preserve"
        width="789.48773"
        height="530.33496"
        viewBox="0 0 789.48773 530.33496"
        preserveAspectRatio="xMidYMid meet"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs1907">
          <linearGradient id="gradient-body" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient-tail" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient-flame-outer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient-flame-inner" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient-window-side" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient-window-front" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <g
          id="g1909"
          transform="matrix(3.7795276,0,0,3.7795276,-5.9001544,-261.01708)"
        >
          <g
            id="g1195"
            inkscape:label="Jet-TomasLinan"
          >
            <g
              id="motor-derecho"
              inkscape:label="Motor-Derecho"
            >
              <path
                id="motor-derecho-path"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-body)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 104.83223,130.38072 c 0.0499,-3.81354 1.94205,-8.18986 4.03193,-9.32144 7.63359,-4.13327 15.90509,-6.34319 27.10273,-8.62739 2.03117,3.71002 0.70059,7.60142 1.07278,9.37655 -8.61273,4.45108 -32.44316,11.92746 -32.20744,8.57228 z"
                sodipodi:nodetypes="csccc"
                inkscape:label="Motor-Derecho"
              />
              <path
                id="fuego-derecho"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-flame-outer)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 137.25073,112.1465 48.46093,-6.59174 c 0,0 -45.30491,16.68986 -46.83852,15.11944 -2.39084,-2.44821 -1.62241,-8.5277 -1.62241,-8.5277 z"
                inkscape:label="Fuego-Derecho"
                sodipodi:nodetypes="ccsc"
              />
              <path
                id="fuego-derecho-int"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-flame-inner)', stroke: '#000000', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 137.69908,113.80033 25.63163,-3.85091 -25.26622,9.0576 z"
                inkscape:label="Fuego-Derecho-int"
                sodipodi:nodetypes="cccc"
              />
            </g>
            <path
              id="ala-derecha"
              pathLength="1"
              style={{ display: 'inline', opacity: 1, fill: 'url(#gradient-body)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
              d="m 41.550648,99.314079 5.896361,-3.493561 0.221287,19.278062 29.823539,24.47321 -27.992633,8.8 -14.246471,-29.22656 z"
              inkscape:label="Ala-Derecha"
            />
            <path
              id="fuselaje"
              pathLength="1"
              style={{ opacity: 1, fill: 'url(#gradient-body)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
              d="M 35.184508,155.49788 C 69.281145,142.20724 140.3833,121.92703 140.3833,121.92703 l 15.8927,-30.764613 21.82424,5.647078 -6.25667,33.234515 -37.5263,25.46496 c 0,0 -5.42562,10.46701 -10.25223,13.30411 -19.44599,11.43043 -39.421397,19.92441 -60.181075,27.28436 -13.696705,4.85591 -31.758952,10.21029 -40.413805,10.86702 -8.654853,0.65673 -14.6048647,-0.38843 -16.3776007,-1.20449 -1.7727359,-0.81606 -6.60078607,-3.08622 -2.4090751,-9.53617 4.1917109,-6.44995 13.5701728,-17.18914 14.9405008,-20.86064 1.426435,-3.39555 7.281941,-13.17146 9.99196,-16.09735 2.550683,-2.3268 3.480407,-2.95398 5.568563,-3.76793 z"
              sodipodi:nodetypes="scccccsszzsccs"
              inkscape:label="Fuselaje"
            />
            <path
              id="ala-izquierda"
              pathLength="1"
              style={{ opacity: 1, fill: 'url(#gradient-body)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
              d="m 71.679552,184.90119 115.219768,22.97738 12.56922,-8.99417 -0.14852,-22.06772 -6.09858,4.18395 -3.17529,13.96252 -71.34074,-31.59542 z"
              inkscape:label="Ala-Izquierda"
              sodipodi:nodetypes="cccccccc"
            />
            <g
              id="ventanas-laterales"
              pathLength="1"
              inkscape:label="Ventanas-laterales"
              style={{ opacity: 1, stroke: '#000000', strokeWidth: 3, strokeOpacity: 1 }}
            >
              <ellipse
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-window-side)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                id="path2222"
                cx="72.087784"
                cy="166.80347"
                rx="2.1637595"
                ry="5.0612564"
              />
              <ellipse
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-window-side)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                id="path2222-3"
                cx="84.368355"
                cy="162.95973"
                rx="2.1637595"
                ry="5.0612564"
              />
              <ellipse
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-window-side)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'miter', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                id="path2222-6"
                cx="96.808868"
                cy="159.01041"
                rx="2.1637595"
                ry="5.0612564"
              />
            </g>
            <g
              id="ventanas-frontales"
              pathLength="1"
              inkscape:label="Ventanas-Frontales"
              style={{ opacity: 1, stroke: '#000000', strokeWidth: 3, strokeOpacity: 1 }}
            >
              <path
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-window-front)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 32.224349,181.48068 c -4.220572,-0.31254 -10.808935,-3.94192 -12.382244,-5.59116 1.83213,-4.18505 4.933437,-10.31594 7.742316,-13.89248 0.781629,1.30147 4.707895,2.97527 7.19661,3.27171 -2.18026,4.35405 -3.250646,11.71226 -2.556682,16.21193 z"
                id="path2168"
                sodipodi:nodetypes="ccccc"
                inkscape:label="Ventana-Frontal-1"
              />
              <path
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-window-front)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 39.730177,166.49531 c 3.999655,0.13394 5.731147,0.14976 9.711044,-0.0597 -0.36031,6.08629 -5.003105,12.62667 -12.457917,15.39129 0.302232,-3.51167 1.238689,-10.96996 2.746873,-15.33164 z"
                id="path2279"
                sodipodi:nodetypes="cccc"
                inkscape:label="Ventana-Frontal-2"
              />
            </g>
            <g
              id="motor-izquierdo"
              inkscape:label="Motor-Izquierdo"
              >
              <path
                id="motor-izquierdo-path"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-body)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 135.55243,158.6122 c 10.55147,0.63474 20.81597,-5.25869 29.54297,-12.12289 1.38055,-5.11487 -0.053,-16.71388 -1.79971,-16.43062 -4.51145,0.73162 -23.40768,7.71679 -29.74028,13.75672 -3.6015,3.43505 -2.97098,14.49793 1.99702,14.79679 z"
                sodipodi:nodetypes="scsss"
                inkscape:label="Motor-Izquierdo"
              />
              <path
                id="fuego-izquierdo"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-flame-outer)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 167.13023,143.90469 c 0.29716,-3.91867 0.4448,-10.07343 -1.40336,-13.23628 16.55514,-4.24458 43.22031,-10.68802 43.22031,-10.68802 0,0 -20.88001,12.2353 -41.81695,23.9243 z"
                inkscape:label="Fuego-Izquierdo"
                sodipodi:nodetypes="cccc"
              />
              <path
                id="fuego-izquierdo-int"
                pathLength="1"
                style={{ opacity: 1, fill: 'url(#gradient-flame-inner)', stroke: '#000000', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
                d="m 167.055,139.72955 c 0.19139,-1.80684 0.34307,-4.64898 -0.47698,-6.13542 7.78389,-1.73869 24.58508,-6.73225 24.58508,-6.73225 0,0 -14.17894,7.74784 -24.1081,12.86767 z"
                inkscape:label="Fuego-Izquierdo-int"
                sodipodi:nodetypes="cccc"
              />
            </g>
            <path
              id="cola"
              pathLength="1"
              style={{ display: 'inline', opacity: 1, fill: 'url(#gradient-tail)', stroke: '#000000', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, paintOrder: 'stroke fill markers' }}
              d="m 149.72209,74.488695 12.42167,-3.927948 10.91271,11.04901 12.86929,-5.552733 -2.48039,11.875198 15.79292,4.835072 -12.48909,9.164056 -5.94353,-1.49123 -21.80515,-5.360526 z"
              inkscape:label="Cola"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}
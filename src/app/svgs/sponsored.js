import React, { memo } from "react";

function SvgSponsored(props) {
  return (
    <svg role="presentation" className="svg sponsoredSvg" viewBox="0 0 512.001 512.001" {...props}>
      <path d="M188.707 341.326a.6.6 0 00-.048-.008l-.1-.018-.457-.082-1.212-.216-1.844-.322-.113-.019-.377-.066-1.233-.213c-.639-.109-1.267-.216-1.901-.322l-.124-.021-1.449-.243-1.826-.301-1.387-.227-.047-.007-.013-.002-.092-.015-1.794-.288-1.489-.236-1.664-.26-1.497-.23-1.608-.243-1.431-.214-1.541-.227-1.367-.199-1.485-.212-1.333-.188-1.401-.195-1.269-.173-1.34-.18-1.203-.159-1.286-.168-1.133-.146-2.278-.287-12.458-1.537h-26.88l21.261 94.855h75.053l-19.634-87.631zM380.039 96.042c-1.6.914-3.208 1.816-4.823 2.707-.573.316-1.152.625-1.727.938-1.045.57-2.09 1.142-3.14 1.702-.676.361-1.359.713-2.038 1.071-.956.503-1.911 1.009-2.872 1.505-.725.374-1.455.739-2.182 1.109-.918.466-1.834.936-2.755 1.395-.759.379-1.524.75-2.285 1.124-.895.44-1.789.883-2.687 1.316-.785.379-1.573.75-2.359 1.124-.877.418-1.754.837-2.634 1.249-.802.375-1.606.743-2.409 1.113-.872.401-1.744.805-2.618 1.201-.812.368-1.626.729-2.439 1.092-.866.386-1.731.774-2.598 1.154-.824.362-1.651.718-2.476 1.075-.862.373-1.724.746-2.587 1.113-.831.354-1.663.702-2.495 1.05-.857.359-1.714.719-2.571 1.073-.842.347-1.683.688-2.525 1.031a545.6 545.6 0 01-2.554 1.032c-.849.34-1.697.674-2.545 1.009a478.331 478.331 0 01-5.099 1.979c-.841.321-1.681.642-2.522.958a743.554 743.554 0 01-5.089 1.889 571.431 571.431 0 01-10.14 3.598 570.66 570.66 0 01-10.09 3.376c-.869.282-1.738.564-2.605.842-.804.258-1.607.512-2.41.764-.874.276-1.747.551-2.618.822a891.104 891.104 0 01-4.991 1.53c-.777.235-1.551.465-2.326.697-.882.263-1.764.526-2.643.784-.755.222-1.508.439-2.26.657-.893.259-1.786.518-2.676.772-.736.21-1.468.416-2.202.622-.897.252-1.795.506-2.688.753-.72.2-1.436.394-2.152.591-.901.246-1.803.494-2.699.736-.696.188-1.386.37-2.079.555-.913.243-1.827.488-2.735.725-.659.172-1.313.341-1.969.51-.932.241-1.866.484-2.792.72-.607.154-1.209.304-1.813.456-.971.244-1.944.491-2.909.729-.522.129-1.038.253-1.557.381-1.034.253-2.069.508-3.095.755l-1.2.285c-1.138.272-2.276.543-3.404.807-.081.019-.16.036-.24.056a762.331 762.331 0 01-20.862 4.564l-.597.123c-1.128.23-2.243.452-3.353.673l-.797.159c-1.057.21-2.102.413-3.143.613-.31.06-.626.123-.935.182-.999.193-1.984.378-2.968.564l-1.022.193c-.966.18-1.919.356-2.869.53l-1.019.188a852 852 0 01-2.759.496l-1.046.187c-.909.16-1.806.316-2.698.471-.33.057-.661.116-.989.171-.886.152-1.758.3-2.626.446-.326.055-.654.111-.976.164-.867.145-1.722.285-2.569.424l-.903.148a610.597 610.597 0 01-3.375.54c-.827.131-1.641.258-2.448.381l-.83.128c-.805.124-1.599.243-2.382.361l-.746.112c-.8.119-1.588.235-2.363.348l-.644.093c-.787.114-1.56.224-2.321.332l-.569.08c-.773.109-1.533.214-2.278.316l-.476.065a890.367 890.367 0 01-2.603.35c-.761.1-1.508.199-2.236.292l-.244.031c-.751.096-1.485.19-2.199.279l-.137.017-1.198.148V305.378l.557.069 1.137.142 1.269.161 1.185.152 1.35.176 1.247.165c.461.062.932.125 1.405.19l1.337.182a497.855 497.855 0 012.843.398l1.556.222a729.481 729.481 0 016.216.924l1.549.238c.575.089 1.152.178 1.737.271l1.574.249 1.839.295.174.028 1.43.233c.631.103 1.261.207 1.902.314.542.09 1.093.184 1.641.277.655.111 1.311.221 1.977.336.552.094 1.112.193 1.671.29.678.118 1.356.235 2.044.357.571.1 1.15.205 1.727.308.689.123 1.377.245 2.075.373.59.107 1.19.218 1.787.328l2.125.392 1.81.342c.728.138 1.453.275 2.189.416l1.831.356c.75.146 1.497.291 2.256.441.597.118 1.204.241 1.807.362.79.158 1.575.314 2.372.477.6.122 1.211.249 1.816.374.803.165 1.603.328 2.414.499.622.13 1.253.266 1.88.398.817.173 1.631.344 2.457.522.449.096.907.199 1.36.296 2.119.46 4.261.934 6.428 1.424.328.074.652.145.98.22.878.2 1.767.408 2.652.612.627.145 1.248.287 1.879.434.85.199 1.708.405 2.564.608.676.161 1.348.318 2.029.483.823.198 
      1.656.404 2.484.606.726.177 1.448.352 2.178.533.819.203 1.647.413 2.471.619.743.187 1.484.371 2.232.562.827.211 1.662.428 2.493.643.755.196 1.509.388 2.267.587.824.216 1.655.438 2.483.658.777.207 1.551.412 2.331.622.827.223 1.66.452 2.491.679.783.214 1.565.428 2.352.646.836.232 1.677.469 2.517.706.793.223 1.585.445 2.38.672.834.238 1.672.481 2.508.723.806.233 1.611.466 2.419.704.841.246 1.684.498 2.527.749.81.241 1.621.483 2.433.729.843.254 1.688.514 2.534.773a562.824 562.824 0 014.991 1.553c.83.263 1.662.525 2.495.792.841.27 1.682.541 2.525.815.835.272 1.672.544 2.508.82a540.028 540.028 0 015.054 1.692 548.593 548.593 0 015.073 1.748 553.495 553.495 0 017.624 2.726c.852.311 1.702.626 2.555.942.845.313 1.69.629 2.535.946.856.322 1.711.649 2.567.975a482.34 482.34 0 015.09 1.976c.839.331 1.679.662 2.518.998.861.345 1.722.693 2.581 1.043.831.338 1.662.675 2.492 1.018.869.359 1.737.723 2.605 1.086.823.345 1.646.688 2.468 1.038.873.371 1.745.749 2.617 1.126.814.352 1.628.703 2.441 1.06.879.385 1.756.779 2.633 1.17.804.359 1.608.716 2.41 1.079.881.399 1.76.806 2.639 1.211.797.367 1.594.731 2.389 1.103.886.415 1.768.836 2.651 1.257.782.372 1.565.741 2.346 1.118.897.433 1.789.875 2.683 1.315.763.375 1.529.747 2.289 1.127.92.459 1.834.928 2.751 1.393.729.37 1.46.737 2.186 1.111.959.495 1.913 1 2.868 1.503.68.358 1.363.711 2.041 1.072 1.05.561 2.095 1.133 3.14 1.702.583.313 1.162.622 1.735.938 1.615.891 3.223 1.794 4.823 2.707l22.751 12.994V83.047l-22.75 12.995zM68.62 166.444c-37.837 0-68.62 30.782-68.62 68.62 0 37.836 30.783 68.62 68.62 68.62h55.505v-137.24H68.62zM447.842 220.317h64.159v30.417h-64.159zM461.526 128.882l-28.32 28.32-17.044 17.044 17.044 17.046 4.463 4.462 45.364-45.364zM437.669 275.303l-4.463 4.462-17.044 17.046 17.044 17.045 28.32 28.32 21.507-21.508z" />
    </svg>
  );
}

export default memo(SvgSponsored);
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

const rawIconCollection: Record<string, string> = {
  home: `
  <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="30" height="37" fill="url(#pattern0)" style=""/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_3_5" transform="scale(0.0333333 0.027027)"/>
    </pattern>
    <image id="image0_3_5" width="30" height="37" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAlCAYAAABVjVnMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGVkZjZmN2ItNjM1My00NTIyLWFiNjAtNmQ2YzhkNzljNWI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU1RDUwOTQ1QTJDMTExRUVBMEEwQjNGRjIyMzQ1Rjk3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RDUwOTQ0QTJDMTExRUVBMEEwQjNGRjIyMzQ1Rjk3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4zICgyMDIzMTEyNy5tLjI0MTUgMjhiMGE1YykgIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGVkZjZmN2ItNjM1My00NTIyLWFiNjAtNmQ2YzhkNzljNWI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBlZGY2ZjdiLTYzNTMtNDUyMi1hYjYwLTZkNmM4ZDc5YzViNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgL8gpUAAAOmSURBVHjaYvz//z/DQAAmhgECoxYTBdra2mIkJCRuioiI3GlsbEwmy2ZQ4iIFl5aWloC0IeOMjIx6Us0hSXFiYmInzDJDQ8ND5ubme2D8sLCwiTSxODAwcDbMEk1NzaMwcWNj470wcTc3t2VUtdje3n4dzHBLS8ut6PIuLi6rYPLAUNhOscXXr19n0dfXPwgz1MfHZyEutaGhoTNg6lRUVE6dPXuWiyyLz5w5I6KgoHARZlhEREQ/IV+kpqa2wNRLSUnd2r9/vzRJFm/fvl1VUFDwGcyQoqKiUmLjrr6+Pgemj5ub+82KFSv0ibJ41apV5iwsLF9gmltbWxNJzSr9/f3hSNntz6JFi+zxWjxv3jx35Pw5efLkAFItheElS5a4Ac34BzML6JhgrBa3t7dHI1n6a+XKlTbkWgrDW7duNWFnZ/8EM7euri4FxWKgQB5Mkp+f//WuXbt0KLUUho8fP64sKir6FGZ+fn5+BdximKCamtrV06dPy1DLUhi+efOmqK6u7lmYPcgW/wQJBAABMQYB0wKrnZ2dppWVlRYw4bAToycyMtIeavFPZIu/ggRNTU3D8Gk+efIkF9BtvcDogAcdHx/fC29v78nAPMuPTy+wxIMl3G8YFgN9EINL47Nnz8SkpaXvoddMMAyMxye3b99WwFPs+iJbzEJs9QnUuP/p06eKIHZQUNBUXl7ezUAD/v38+dMbmAPyX79+LQ1UcxCoRp7o+piQj4GFSAzMZ3PmzMEoUIAWh8DkgSVXCjE+JspiCwuLDSB5R0fHg7iC0tPTcxtIDTD17iXGYqKaPsD4lQDRwIJ/Fy41wLL9CIh+/vy5JNXaXJ8/fwYHy/LlyxlxqQHKMYPo379//6OaxaysrGDD/v37x4InrYAtZmZmJt1iJibatXbRzYbxWKBB+p0YTaRYAAMfPnz4BmUyI1sMpoGNOC4ccQx2ELCefo3LQjY2NrDcly9ffmKTNzIy4kS2GOxTYOVw5datWwbnzp1rnj59OiOwGPwIBEwyMjIML1++/M/IyCgNUicvL28LrOqefP/+nQkozgAUZwA26hkEBAT+KSoq2gIrA1BciwLr8UAgn+HRo0cMQLP+ffv2jffUqVO1IDOgpR8kHwOrQTtcRSEIA4MPTAN9jFMNMFGhqMWF165d643SEJgyZYov0IcnQSELyuTQQuUbFIPEQBX6FyQ5ZPwNKvcJir+hmfFFUlLybHd3dyjMPsbR/vGoxbQCAAEGAKz+n0obRqScAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
`,
}

export const MyIconCollection = Object.entries(rawIconCollection).reduce((acc, [key, value]) => {
  acc[key] = value
    .replace(/fill="(\w*)"/gm, (match, p1) => match.replace(p1, 'currentColor'))
  return acc
}, {} as Record<string, string>)

export default defineConfig({
  theme: {
    colors: {
      primary: '#374EFC',
      black: '#252525',
      dim: '#eaeaea',
    },
  },
  shortcuts: [
    ['wh-full', 'w-full h-full'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        bryce: {
          ...MyIconCollection,
        },
      },
    }),
  ],
})

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Progress/index.less":function(A,e,t){},"./src/components/Progress/index.mdx":function(A,e,t){"use strict";t.r(e);var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),g=(t("react"),t("./node_modules/@mdx-js/react/dist/esm.js")),n=t("./node_modules/docz/dist/index.esm.js");t("./src/components/Progress/index.less");function s(A){var e,t,r,g=A.themeColor,n=void 0===g?"#06f":g,s=A.percent,o=void 0===s?0:s,B=A.autoHidden,c=void 0!==B&&B,a=A.hiddenText,b=void 0!==a&&a,d=A.width,l=void 0===d?320:d,i=A.textColor,p=void 0===i?"#666":i,j=A.statusScope;return 100===+o&&c?null:React.createElement("div",{className:"progressWrap"},React.createElement("div",{className:"progressBar",style:{width:"number"===typeof l?l+"px":l}},React.createElement("div",{className:"progressInnerBar",style:{width:"".concat(o,"%"),backgroundColor:j&&j.length?(e=j,t=o,r=n,t=+t,e.sort((function(A,e){return A[0]-e[0]})),1===e.length?t<e[0][0]?e[0][1]:r:2===e.length?t<e[0][0]?e[0][1]:e[0][0]<t&&t<e[1][0]?e[1][1]:r:3===e.length?t<e[0][0]?e[0][1]:e[0][0]<t&&t<e[1][0]?e[1][1]:e[1][0]<t&&t<e[2][0]?e[2][1]:r:void 0):n}})),!b&&React.createElement("span",{className:"progressText",style:{color:p}},o+"%"))}var o=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Progress",filename:"src/components/Progress/index.jsx"}}),t.d(e,"default",(function(){return c}));var B={};function c(A){var e=A.components,t=Object(r.a)(A,["components"]);return Object(g.b)("wrapper",Object.assign({},B,t,{components:e,mdxType:"MDXLayout"}),Object(g.b)("h1",{id:"progress\u8fdb\u5ea6\u6761"},"Progress\u8fdb\u5ea6\u6761"),Object(g.b)("h4",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(g.b)(n.c,{__position:0,__code:'<Progress percent={50} />\n<br />\n<Progress percent={20} themeColor="#888" />\n<br />\n<Progress percent={10} themeColor="red" />\n<br />\n<Progress percent={88} themeColor="green" />',__scope:{props:this?this.props:t,Playground:n.c,Progress:o},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZoKERD4DsI1ZXaD04AEcgAXTfQ4EkQjKGIuAGNUbBcIg9hA0ldDyNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rJiWLsWEERoeqAFZ1LQzcVwTDwjihp6a0Yf6ulYvsMmBgh6oAJgh_EYCPRwoCFPgQAAYgADkp_h2Hh36Ybhn7EeRki0eo_R6vi3GJnxmBCeJ_gunQanabpxhYZpxmE2Z1GgfZ4BKbQ7mCcoImBBJ4i6GFxmpBet6Pq-tqpAew6zC_EAqJoz51xoBjpbY8MNDgLBAN0ECDDAvDTqYmZLEG-A-LlftKBmc0pPmOB2ltU6KMkdjcCxCOhMedhAHFlQB4vUAJOM07MWApjgdV0oEI45NcIvbtLgQcHz4UIwjVxFA8UruHK1wAG11IAXXYc12A8duO6O1Bk8AAYtAGlbQAeBUAASNAE_tQAUvUAELdAG34wAyvUAQ3NAByMwAnIMANqdAEADMxpuE7tzHyrZtkk6I8gjOAqHmJZWHiJZMAu0Irr5gRSoU6sH6gbKAGof7rGToAOblADwOoABiVADkmlndY1cCCFwENfW-MBB4WAgGAJBwc_ywBnAWCacl4qfxXF0AgfRzA_1rNVZB_d-5LSoVgmh8Uu5XGfpdAg791jyHnHAbo6DMHzBwDglIeDJpYyIQjEhZD2AUMYPQ-YNDO50JvgwzurcmHQ3YFcZR8jVGKNkRQvq0jeyyO0TANRHdaHLVMeY8xGiLAsPOmwjh1YuFQB4ZwDBpjBF0GEXifBWlxG_UkQIchxi5FmN0V3Kx1DVHqIRvY8JCiu76N7IYmRiSmGWIyRYuJdMaxaOoZkvRRjf5pLCdYrGFjFHRIYZU2x8S6YOJfm_FWQpOFmF2knEwRQjDsBXqvQAI36ADe5Hp7AAAChlMiymAErXmrSBBoRRNOWc_T55b1GRM0u3p5KyxoGhVAoQiCBCOCvcegA_N0AGBKgAV6w2ZM7ZwAwgRAABJcEwDtXuwhyTmEAPRmgAyFRXuAzm6kACkgA300AFeBgAKpUABG2gBGTVuVs6ZNhOx0EsNgAgaEvAq3FD835gBHfUAPOh_TADhpoAGnMEVTPkjidAExFmogKAAHwOUcjIfS17z0AL3ay8KX3NoFgdh8y6XLLZWS9Z5hembMpcAFEl84DOGQWhCu8F2B70ABBp49FAXMANRKgA-6MAHb-gBYOUADAqK9ADAwYAF7Ul5ry3ooQAAOaQMAIKKgAO6P1UmQAVHIavYIALjlAAAcm6wAMXKABe_QADqYDJ6byVAh9ZrMjthGIOdxAnsFzvJdgK5Znv2yu0Um6lLJgD0qmhGuyphyXUksFcjzKAvJReYOSF03EwDLQjZFby0X8uynWnhjbfrUrwVpHGXaax8oFarTNpNLLjvCr9GVpC5XIILRYNCcl41wHWME8wf8i2yUmkC9ghiK1VreXQlcByEiaPnYjKq5A4KsQAHLejqvwIOAMADqmQZjiA0TGDgV7_BwDvUeEmT6UZwGvKXamNVYD1Sgj2vAVww4wGGnmLgIi5LtGZcchay0YPsD_oHXSZ7sPyFanY2sVUSMWB_be-9gGiLAYaKgZ0AhQMCGpuR6qUlIPAC_nkvJMGrjFAACTACLfIYFxR9I8bph4CU2xEJtAwO_LRBBZXyqwbu_q068iqYEUIgsy1T47AvjO6-ymZ3aYbazDGSx03zI2njZWqs2NEZI5LRGO5ZCfvc657jPGACEzbUXovU7WEK7gejXr_dRx9tGSKttECAdjtUoOFlVnB9FGaiNiGE-jF0uH2jAvaPIKQoXUCud2r9fasYOlCTtjgeNvtw7ZR8zZ1Lvlg4NfgFXelM4JOWf0Fcb2HW4A4HQxkXr-7Xl0AGwOIbOAsVQF60O9KUAIApFUm1n2fthtLIKL1gLqA4vTfa1tubnzet8Y27N6gMAdRgA6xGVuK5BsnZ2z1p7M2TujZY9WAevXNOzqwUdzb4ccBKsSNV_0zosD4TOs0giMXWJmwtrRa2BBbYI_tmobxiPtCu30AwOrGPX2zHkopUuKkrjWR8NpLAKpqwsBCnBVynBUAredOaMAsBafrHiKt1A5oXj43uD0fQGQ6cWEJ8xYDzHSeFuCi8OaVwuhwRiKwGA4uawM7JPBK4aA2cwHNB4ImOwNcWE2KtwgVxOY6VN73GTcnkLoHNFQVrpMwDqXd-723XgBBTnNJkFgeQrigxtyuSgauBCc9GFcfbtvJcA3o4xmXPnfqCnyMfK4rgPD5ygOEdXGjzcpEtwldSILbfldQusePwG4uy9-kpFS5pYBgAIJT0PCMG9oFDsHK45osbt9-pFC0-RYpW_MtzlxHSzahW2K4NI_586oBdsBfHYEfP8FQPe_gVx-A_GLNUDI5ofxkkZCAXr_AI_5GoNv1NIB1I4Hv-pfy6x-DlHIP0GYx8b_8HStVPCsBoQsBvQT8zoyRKBEhcw8gCgJxNRnciw_hSxn9qx-Aog0Bv8VAHYF8kCLBX8YB5hwxhIIB4Ab8U9b8BJ4sd8QB4pLIcAsBsCawBZYCrR0DqDaD-B2kdokcEDcBdBIAUgF9qBl89BQIQAFIQBaAfQsht9d9TRaB_dYDZh30FAFAiMgA",mdxType:"Playground"},Object(g.b)(o,{percent:50,mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:20,themeColor:"#888",mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:10,themeColor:"red",mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:88,themeColor:"green",mdxType:"Progress"})),Object(g.b)("h4",{id:"\u9690\u85cf\u8fdb\u5ea6\u6587\u672c"},"\u9690\u85cf\u8fdb\u5ea6\u6587\u672c"),Object(g.b)(n.c,{__position:1,__code:'<Progress percent={20} themeColor="#888" />\n<br />\n<Progress percent={50} hiddenText />',__scope:{props:this?this.props:t,Playground:n.c,Progress:o},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZoKERD4DsI1ZXaD04AEcgAXTfQ4EkQjKGIuAGNUbBcIg9hA0ldDyNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rJiWLsWEERoeqACZ1LQiYYCPRwoCFPgQAAYgADlR_h2E3FcEw8I5MaemtGH-rpWL7DJgYIeqAFYId8LhMFQSxsCmPHfqkF63o-r62qkB7DrML8QComjPnXGgGKJkjJHYjQ4CwQDdBAgwwLw06mJmSxBvgPi5X7SgZnNKT5jgdpbVOiipfDXAsWNoTHnYQBxZUAeL1ACTjR2zFgKY4HVdKBCOOTXF926A4EHAveFCMI1cRQPFK7hytcABtdSAF12HNdgPCT5OjtQO3AAGLQBpW0AHgVAAEjQBP7UAFL1ABC3QBt-MAMr1AENzQAcjMAJyDADanQBAAzMabhO7cx8q2bZJOiPIIzgKh5iWVh4iWTALtCK7YaFUqFOraeoGygBqdf1jtwA5uUAeB1AAYlQByTVd9Yw4IH2BDHieYBziwIDAW-9b_WAZwLCa5PileVy6Ag-jmHXrWaqd8s5ZyWqA1-4D4qpyuHPS6BAl4CHWPIeccBuhPxfvMHA78Uif0mqDX--N_6APYMAxgUD5jgJTpA8e0CU4J1gVjdgVx6HUMYbQyhwC-rkN7JQ9hMAmHJwgctQRwjhEsIsPA86iDkGoPQZg5-gjcF0HwXiL-WliG_VIQIIB_CqFCM4anMRYDGHMPxtIwxNDU7cN7Lwih1jYGiKcSIixv1fpsLAc4rhfCN4OIMeI0GIjaGmOgcEyRliPEyPnovSgcMUHVl2rtW2JgihGHYPXBugARv0AG9y6T2AAAFDKZFlMAKGMN4lCjQiiacs4slV1bgU4pAdvTySBvoNCqBQhEECEceuRdAB-boAMCVAAr1s0kpbTgBhAiAACTpnQNCXh4ninMIAejNABkKvXI-8V1LqQAKSADfTQAV4GAAqlQAEbaAEZNCZrSyk2E7HQRmWACBLOEOSdZGzACO-oAedCsmAHDTQANOY3NKfJHE6AJg1NRAUAAPt03pGRMmNyroAXu067AqmbQZ5yDIV1MRYCpp5gMktJBcAFEI84DODvmhYO8F2Cd0ABBpRdFDDMANRKgA-6MAHb-gBYOUADAq9dADAwYAF7Va6N1booQAAOYn0AIKKgAO6M5UmQAVHJMvYIALjlAAAcgqwAMXKABe_QADqbZPSbyVAPdZrMglqxCMus7jaPYB7eS7AVwVJgMg7K7REbqUsmAPSDr8YdMzHJdSSwVwzMoPMh55g5IXSgBgoN-N7n0yeVMSN8QY0-t-mCz-Wlwaxt-pipBVS_ZykRpZEt4VfpkoARSu-abULZStXAdYujzCbz9UmyauzNK8JDWG-mkCVzdISKwmtCYqrkDgqxAAct6Oq_BdYAwAOqZBmOIFhMYOBjv8HAKdR4EZzuJnAa8Ad0Y1VgPVKCGa8BXENjAYaeYuAELku0OFfSFrLQvewTeOtdJDvffIVqUjaxVQAxYDdk7p27qIvuhoqBnQCEPSgkAw6PEWBPXVYAq9kPIYvVcYoAASYArb5D7OKPpTDHiPASm2IhNoGBkFsIIOSylr92C8IrXkJjOC8EFmWgPHYw9K1jwY5WjjMBSRk30EsJ1yCNr4mhs6gtwHUK7TIz9Dx-1Yyrp3LIFhGHMMAEJ42PKZix_qjAQruB6OOrd4HZ2QZIom49UlT3ocLAkq9TMXV_rEAR8TmZP3tH2e0eQUhzOoFUxYZTBMtNVhSagc1cAcBWo1kbbKumpMFquGrZL8BQ5QpnKR0m1F9CZYHNlhLz6MgFe7Qs1Svk9ZlZwMsqABW83pSgBAFItWsuawS7UgoBXDMMyZiV-rPXGtvIK9hur6sxvUBgDqMA2WIwJxXN1o2uW6kFYsGtnLFXEkWGzgVtjVbX4jZm-tmliQzCxZOvaBBC8CJ2dYgLIWtFRYEHFk9tiltVHPe0ArfQDBEtfcXbMeSikA4qSuNZHw2ksAqmrCwEKcFXKcFQO1505owCwHh-seIHXUDmheNDe4PR9AZARxYYHzF93wfB764KLw5pXC6HBGIrAYCU5rEjsk8ErhoAxzAc0Hg4Y7C5xYTYHXCBXF2TpcXGdKPUeQugc0VA3PsERmAdSWutfy68AIKc5pMgsDyFcSmcuVyUA5wIbHowriDfl9TgG0HYN09079QU-Q-5XFcB4L2UBwic5YZLlI0uEp7P2fLyLkWnf7sTfT36SkVLmlgGAAg0OLf4yT2gA2esrjmlBpn36kULT5FijL8yuOknXYFqFbYrg0j_i9qgeWwFAdgV0_wVA07-BXH4D8Ys1QMjmh_GSRkIACv8Gt_kagveHUgHUjgRf6l_LrH4OUcg_QZh9zn_wdK1U8KwGhFgb0Y-zpkkoIkXMeQCgTk1KrosfxSyr-rPwKIaBd8qB-5oF_Fh18wHmHDGEggHgDn3d3nwElECQHn3ikshwCwF_xrH4EgMtEiE_1gPgP4FQRryUEFif1wF0EgBSCb2oFbz0FAhAAUhAFoB9CyF7371NFoCN3v1mGXQUAUD_SAA",mdxType:"Playground"},Object(g.b)(o,{percent:20,themeColor:"#888",mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:50,hiddenText:!0,mdxType:"Progress"})),Object(g.b)("h4",{id:"\u8bbe\u7f6e\u8fdb\u5ea6\u63a7\u4ef6\u5bbd\u5ea6"},"\u8bbe\u7f6e\u8fdb\u5ea6\u63a7\u4ef6\u5bbd\u5ea6"),Object(g.b)(n.c,{__position:2,__code:'<Progress percent={20} width={200} hiddenText />\n<br />\n<Progress percent={20} width={400} hiddenText themeColor="red" />\n<br />\n<Progress percent={40} width={300} hiddenText themeColor="green" />',__scope:{props:this?this.props:t,Playground:n.c,Progress:o},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZoKERD4DsI1ZXaD04AEcgAXTfQ4EkQjKGIuAGNUbBcIg9hA0ldDyNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rJiWLsWEERoeqACZ1LQnF0AmMH1Ih3wuEwVBLGwKZNxXBMPCOdGnprRh_q6Vi-wyYGCFhyGuBh4BTLhtCbE7OgUawKYJhgI9HCgIU-EEbJ-HYHHfsx7GfrxgmSOJ6j9HqmmKehvB6qTWmEYZ5HUfxNmYA5rn-GIug-YFvHJBet6Pq-tqpAew6zC_EAqJoz51xoBixdYyR2I0OAsEA3QQIMMC8NOpiZksQb4D4uV-0oGZzSk-Y4HaW1Toot3w1wLF46Ex52EAcWVAHi9QAk41zsxYCmOB1XSgQjjk1xK9umuBBwMvhQjCNXEUDxSu4crXAAbXUgBddhzXYDw-_7o7UCzwABi0AaVtAB4FQABI0AT-1ABS9QAQt0AbfjADK9QBDc0AHIzACcgwA2p0AQAMzGm4Tu3MfKtm2STojyCM4CoeYllYeIlkwC7QiurWBFKhS1Z35QGygAamAesLOgA5uUAPA6gAGJUAOSahd1hNwIBXAQT8X4wAnhYCAYBMFRz_LAGcBYJpyXigAlcXQCB9HMMA2s1UsFjzHktRhhDmHxUHlcL-l0CB_3WPIeccBuh4IIfMHAxCUikMmqDShuNqG0PYPQxgbD5jMIHqw5-7CB4904RjdgVwtFqJ0RolR9C-pKN7CooxMBdH9xYctGxdi7H6IsNw86vD-HVkEVAYRnB8E2IkXQKReIyFaTkb9BRAg6FWNUbYkxg9HFMJ0Xo3Gbi4nqMHmY3sFjlEZM4Q4_J9jUmCxrIYphBTTGWJAbk2JTjQb2I0Uk9hDSXFpMFu47-v9KCcwEAIswu1M4mCKEYdg28d6ABG_QAb3IjPYAAAUMpkWUwBWbsx6UKNCKJpyznGWvQ-syFk129PJIG-g0KoFCEQQIRxt5z0AH5ugAwJUACvWBzFnHOAGECIAAJRGdA0JeB6eKcwgB6M0AGQq284HxThgAUkAG-mgArwMABVKgAI20AIyaryjnLPpkjJmBB_nCHJCC0FgBHfUAPOh4zADhpoAGnMMVLPklDCYmzUQFAAD4XKuRkMZu816AF7tLetL3m0GZn_Jl2yuXUv2eYUZhy6XABRA_OAzgsFoXrvBdgp9AAQaXPRQDzADUSoAPujAB2_oAWDlAAwKtvQAwMGABe1Teu9D6KEAADmCDACCioADuijVJkAFRy2r2CAC45QAAHKesADFygAXv0AA6mEyRm8lQBfWazIXZwAjJHO4ET2Al3kuwFcqzNbrKrnKAAxOpSyYA9KZtxqczMcl1JLBXJ8ygPyVbZQur4mANbcbYsZmrOSzbhFtt-gy0JWlwZ9prEKvhubsrtHzZZGd4VfrypoYqrBZaLBoTksmuA6wonmFARWqYYSoWaQsXWhtSNWErguQkAxK68ZVXIHBViAA5b0dV-CRwBgAdUyDMcQ-iYwcHvf4OAz6jzc3fYTOA14a58xqrAeqUEB1XFjjAYaeZKahMmu0dl1yFrLQHewUBEddLXvw_IVqrjaxVQoxYQDT6X1gaIhBhoqBnQCCg30kAN7SkWFg3VYAgDuOC0Q-wYoAASYAe75DQuKPpQTv0PASm2IhNoGA_6GIIAqpVhD2AWIXXkLT4jJEFmWjfHY99F1Pw04ugzraJakyWNmv-G11ZrN6dR1Cu1BMi1-vtWMf6dyyH0QJ7jABCDtqtmY6f6owEK7gegPuA_Rt9jGSK4pg1JOD_HCy9KQ6jP-HmxASZJi6Qj7RoXtHkFIWLqBvOoRXL5wLO0hIJpwMmkOcdsrBcc7mq4Qd2vwEbsymcsm7P6F6wOfrcAcDYYyCNk9vzVK-SjpNnAAKoAjbHelKAEAUiLb66HKbWyCgjfC7i8by2DurYJSN4T-2444GoDAHUYB-sRh7iuO7A2jvDY-xNy7M2-nVnHiNvTS7CHneDpd1ViQBlCROvaHhP8CIpdYjbO2tFHYEGdijtiqcgmo-0D7fQDBWs46_bMeSika4qSuNZHw2ksAqmrCwEKcFXKcFQNt505owCwEZ-seIO3UDmheGze4PR9AZCZxYUnzEIPscp-W4KLw5pXC6HBGIrAYDS5rCzsk8ErhoC5zAc0HhOY7B1xYTYO3CBXChTpS3I9FPKeQugc0VAcvsHzWAdSPufeO68AIKc5pMgsDyFcAArA7lclAtcCF56MK44XHey4Bsx1jCvgu_UFPkK-VxXAeDLlAcI2v9HW5SLbhKMLHeebq9WVPEHcWK9-kpFS5pYBgAILT6PuNW9oBjlHK45pQY99-pFC0-RYp2_Mvz7xAybahW2K4NI_4y6oG9sBYnYFgv8FQC-_gVx-A_GLNUDI5ofxkkZCAEb_A4_5GoAfzNIB1I4Bf-pfy6x-DlHIP0GYV9H_8DpTVR4SwDQhYDeiX5nRkiUCJC5h5AFATiaju5Fh_Clgf7Vj8BRBoAAEqB46aDoEWBf4wDzDhjCQQDwCP5Z5P4CSiBIBP7xSWQ4BYAEE1j8A0GWiRA4EMFMH8D9I7Ro6oG4C6CQApCr7UAb56CgQgAKQgC0A-hZAH5H6mi0Ah5IGzA_oKAKBkZAA",mdxType:"Playground"},Object(g.b)(o,{percent:20,width:200,hiddenText:!0,mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:20,width:400,hiddenText:!0,themeColor:"red",mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:40,width:300,hiddenText:!0,themeColor:"green",mdxType:"Progress"})),Object(g.b)("h4",{id:"\u8bbe\u7f6e\u8fdb\u5ea6\u72b6\u6001\u9608\u503c"},"\u8bbe\u7f6e\u8fdb\u5ea6\u72b6\u6001\u9608\u503c"),Object(g.b)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u8fdb\u5ea6\u5c55\u793a\u4e0d\u540c\u7684\u8fdb\u5ea6\u6761\u989c\u8272\uff0c\u6b64\u6848\u4f8b\u5206\u4e3a20\uff0c 50\uff0c 80\u6321"),Object(g.b)(n.c,{__position:3,__code:"<Progress\n  percent={19}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>\n<br />\n<Progress\n  percent={40}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>\n<br />\n<Progress\n  percent={90}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:n.c,Progress:o},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZoKERD4DsI1ZXaD04AEcgAXTfQ4EkQjKGIuAGNUbBcIg9hA0ldDyNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rJiWLgFdfthBEaHq-KAE5dt-36UWiPJnCoeZ6oAbSBmGUYAJnUpZ5XQdoAF19JhjGAFYcblIV3DSQniZJmsUYADgp9oAGJ1MssBafRiwCehmHN3RxgPCOQWnprRh_q6Vieb7DJQYIerTPU_mSbhggEaRurgDR8WSaxlmunxonZYsFHydxqmZxgbm9Yx5ncfZznbfp9g-fRsWSeF0WfolqWSNlkH9HqiGVdl9XNcoZGddN9gDdxo2XdduOLcpzJraT12mZZp2uZNu3edVmtPYlyQXrej6vraqQHsOswvxAKiaM-dcaAY_3WMkdiNDgLBAN0ECDDAvDTqYmZLEG-A-Llfso_NKT5jgdpbVOiiu_DXAsSXoTHnYQBxZUAeL1ACTjA-zFgKY4HVdKBCOOTXBv2774EHBL-FCMI1cRQPFK7hytcFH1IE3YOadgHgAEEyOqgXegABi0ANK2gAeBUAAJGgBP7UACl6gAQt0ANvxgAyvUAIbmgAcjMAE5BgA2p0AIAGZhprCW7OYfKWxtiSXhnACMcAtZLFYPEJYmALqhCuo4KAQpSoKWrOwqA2UADUIj1i70AHNygB4HUAAxKgByTRPusV-BBr4CGYVrSBFgIBgC0VHP8sAZwFgmnJeKgiVxdA1gIcwIjazVS1uA8BS1HGGOcfFIBVwuGXQIHwoU6x5DzjgN0PRBj5g4GMSkUxk1MaWPFtYvodjeyMDcfMZxgDXEsPcYAlGnj0ZXGyek3JmTUn2L6uwexqSikwDyQTFxy0al1LqbLbx51fH-IEIE4JoT9E1MiXQaJeIzFaXib9RJtjKkpLSbUkpQDGlONyfku2hTFn1NKVM0RFSqkzOaZkhZ7jPEtILuwVZhz1lALKb2bZ0ymmYwuVkpx9zjnJ1OWdbhvDKD8K6dWXau0d4mCKEYdgODcGABG_QAb3JAvYAAAUMpkWUwAJgwCPJ0tCKJpyzlBegoh0K4X329PJIONA0KoFCEQQIRwcHwMAH5ugAwJUACvWeL4WEuAGECIAAJLgmAdqgOEOScwgB6M0AGQqOD5HxXUupAApIAN9NABXgYACqVAARtoARk1mUEsRTYTsdBLDYAIGhLwXzxRCuFYAR31ADzoaCwA4aaABpzdVCL5I4nQBMdFqICgAB8yUUoyCCvB6DAC92tg-1rLaBYD8V8oUrrMW-ttbi8wwL8UOuABHOAiNDFoSfvBdgZDAAQafAxQdLADUSoAPujAB2_oAWDlAAwKjgwAwMGABe1LBeCiGKEAADmijACCioADuiy1JkAFRy-b2CAC45QAAHK9sADFygAXv0AA6mYKgW8lQJQ2azIO5MNnncMZ7Bz7yXYCuZFqKI23zlLnPSO7xbEqmHJCmK52WUC5dq8wckLpQBCUsFcWqeW6rDdlJ9L7T2_SdaYrS2NX3i1DeG752U2aWWg-FWGBBGFpvmH-1C2U12A2rBM8wYjz2yUmhKzSFSb13p5a4lcZKEhvJXDGDg5A4KsQAHLejqvwWeAMADqmQZjiCFlVWj_g4CMaPHwEArHpZwGvPffg1UpKwHqlBADeArgLxgMNPMXAYlyXaF6ylC1loKfYGImeuk3n6fkK1WW1HkOuz4wxpjwnRMkQaKgZ0AgJNdJAFZ-mNVZPACEa8iwCmrjFAACTAHPfIKVxQ6avI8BKbYiE2gYE6YU-DGtU1a3YBUlNiGjGDILMtWhOwGFpeYalyO8xSTy30EsPdMBOkbXxCiurB7Y5mdlr7X6-1YxCx3LIdGfn6YAEJ306r1Zl_qjAQruB6HRgTdmWNETE5-0QHnvPazygepTerOmoVamFqrmZDPtCle0eQUgpuoA66hKjvWqz_NQCunAa6J6L2ygN2ryXfJRxe_AF-bqZx03PVcMeP24A4G0xkOmRHuV0GBwOUHOBDVQDpmB9KUAIApFUl98ek8wcYoKHTEbqBltw--7jxH_K6aBexwj6gMAdRgB-xGXWv0Qfk_xwDlcbPF7g_JZS9YEC6bZa1qTnHPPM2JDMPdk69ofE8IIotkiDcm60VbgQduivO7dwGaxfuwF9AMCe5ruAHHZjyUUvfFSVxrI-G0lgFU1YWAhTgq5TgqB0fOnNGAWA9v1jxAx6gc0LwUX3B6PoDIDuLBG-YmJtz5uz3BReHNK4XQ4IxFYDASPNYndknglcNAHuYDmg8PwnYWeLCbAx4QK4EqdLl9AXFhLyF0DmioN8q4rMwDqS713-vXgBBTnNJkFgeQrikzryuSgGeBDe9GFcIn9fo8Aycy5uPA3gaJ-oVcVwHhL5QHCJn9GleUjV4SpKqV9f-b8yX0tsb6_2BKRUuaWAYACDW4n-LR_aB55RyuOaTGH-v0kUFo-QsUNe5kvuvyUuDcoU2wrgaQ_4l8qAeuegoEIAA2_AqATG_AVw_APwxY1QGQ5oP4ZIjIIAdM_A0--Q1AOBO6IA6kOADB6k_k6w_A5Q5A_QMw1CtB_A6U1UeEsA0IWA3opBZ0ZIlAiQuYeQBQE4moreRYfwpYLB1Y_AUQaAPBKgG8iByhFgbBMA8w4YwkEA8AtB9-_AAkK2uBIA8UlkOAWAOhNY5hchVoGhNhdh_AgS0BSgjcihuAugkAKQiB1AKBg8DACkIAtAPoWQOBeBpotAQ-chswXGCgCgZmQAA",mdxType:"Playground"},Object(g.b)(o,{percent:19,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:40,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"}),Object(g.b)("br",null),Object(g.b)(o,{percent:90,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"})),Object(g.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(g.b)("pre",null,Object(g.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Progress } from '@xlab/xu_ui'\n\n// \u5bfc\u5165\n<Progress percent={50} />\n<Progress percent={40} width={300} hiddenText themeColor=\"green\" />\n<Progress percent={90} statusScope={[[20, 'red'], [50, 'orange'], [80, '#06f']]} />\n")),Object(g.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(g.b)("table",null,Object(g.b)("thead",{parentName:"table"},Object(g.b)("tr",{parentName:"thead"},Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(g.b)("tbody",{parentName:"table"},Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"themeColor"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u7684\u989c\u8272"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"'#06f'")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"percent"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u503c\u767e\u5206\u6bd4"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"autoHidden"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u8fdb\u5ea6\u5230100%\u65f6\u81ea\u52a8\u6d88\u5931"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"bool"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"hiddenText"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u5f71\u85cf\u8fdb\u5ea6\u6761\u6587\u672c"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"bool"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"width"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u7684\u5bbd\u5ea6"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"textColor"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6587\u672c\u989c\u8272"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"'#666'")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"statusScope"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u72b6\u6001\u9608\u503c,\u5206\u522b\u8bbe\u7f6e\u4e0d\u540c\u8fdb\u5ea6\u8303\u56f4\u7684\u8fdb\u5ea6\u6761\u989c\u8272,\u6700\u5927\u5141\u8bb8\u8bbe\u7f6e3\u4e2a\u503c, \u4e3a\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"array"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Progress/index.mdx"}}),c.isMDXComponent=!0}}]);
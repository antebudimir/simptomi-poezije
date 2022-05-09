import React, { useEffect } from "react"
import { SubscribeWrapper } from "./index.styled"

const Subscribe = () => {
  // useEffect(() => {
  //   const script = document.createElement("script")

  //   script.src = (function (w, d, e, u, f, l, n) {
  //     ;(w[f] =
  //       w[f] ||
  //       function () {
  //         ;(w[f].q = w[f].q || []).push(arguments)
  //       }),
  //       (l = d.createElement(e)),
  //       (l.async = 1),
  //       (l.src = u),
  //       (n = d.getElementsByTagName(e)[0]),
  //       n.parentNode.insertBefore(l, n)
  //   })(
  //     window,
  //     document,
  //     "script",
  //     "https://assets.mailerlite.com/js/universal.js",
  //     "ml"
  //   )
  //   ml("account", "42193")

  //   document.body.appendChild(script)

  //   console.log(script)
  // }, [])

  return (
    <SubscribeWrapper
      className="ml-embedded"
      data-form="9iB3aa"
    ></SubscribeWrapper>
  )
}

export default Subscribe

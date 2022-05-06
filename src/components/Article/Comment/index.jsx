import React, { useEffect } from "react"
import { CommentWrapper } from "./index.styled"

const Comment = () => {
  const commentsId = "graphcomment"

  useEffect(() => {
    window.gc_params = {
      graphcomment_id: "simptomi-poezije",
      fixed_header_height: 0,
    }

    const script = document.createElement("script")
    script.src = "https://graphcomment.com/js/integration.js?" + Date.now()
    script.async = true

    const comments = document.getElementById(commentsId)
    if (comments) comments.appendChild(script)

    // This function will get called when the component unmounts
    // To make sure we don't end up with multiple instances of the comments component
    return () => {
      const comments = document.getElementById(commentsId)
      if (comments) comments.innerHTML = ""
    }
  }, [])

  return <CommentWrapper id={commentsId}></CommentWrapper>
}

export default Comment

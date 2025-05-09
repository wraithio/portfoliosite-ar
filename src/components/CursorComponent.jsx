"use client"

import { frame, motion, useSpring } from "motion/react"
import { useEffect, useRef } from "react"

export default function CursorComponent() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: "50%",
}

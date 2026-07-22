import { useEffect, useState } from "react"

/**
 * Brief branded loadign screen shown on first paint. Mirrors the original theme's timing ($('.js-preloader).delay(200).fadeOut(300))
 * visible for 200ms, then fades out over 300ms and unmounts
 */


const Preloader = () => {
    return (
        <div>Preloader</div>
    )
}

export default Preloader
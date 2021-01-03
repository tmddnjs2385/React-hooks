import { useEffect } from "react"

export const useBeforeLeave = onBefore => {

    if (typeof onBefore !== "function") {
        return;
    }

    const handle = (event) => {
        const { clientY } = event;

        if (clientY <= 0) {
            onBefore();
        }

    }

    useEffect(() => {

        document.addEventListener("mouseLeave", handle);

        return () => {

            document.removeEventListener("mouseLeave", handle);

        }

    }, [])


}

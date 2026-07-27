import useCountUp from "../../hooks/useCountUp"



/**
 * A single animated statistic number, e.g. "35" -> counts up, with an
 * optional suffix rendered separately ("k+", "+") so it never animates.
 *
 * `className` is applied to both the number and its suffix, since every
 * caller in this design gives them identical typography.
 */


const Counters = ({ value, suffix = "", className = "" }) => {

    const [ref, count] = useCountUp(value)

    return (
        <>
            <h3 ref={ref} className={className}>
                {count}
            </h3>
            {suffix && <span className={className}>{suffix}</span>}
        </>
    )
}

export default Counters
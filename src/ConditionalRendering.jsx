const ConditionalRendering = (props) => {
    const veciBroj = <p>veliki broj</p>
    const manjiBroj = <p>jako mali broj</p>

    const provjera = props.number > 5 ? veciBroj : manjiBroj
    return (
        <>
            <h1>
                Conditional Rendering {props.number}
            </h1>
            {props.number && provjera}
        </>
    )
}

export default ConditionalRendering
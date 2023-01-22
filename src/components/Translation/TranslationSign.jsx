const TranslationSign = ({letter, image }) => {
    return (
        <div>
            <aside>
                <img src={ image } alt={ letter } width="55" />
            </aside>
            <section>
                <b>{ letter }</b>
            </section>
        </div>
    )
}

export default TranslationSign
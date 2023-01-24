const TranslationSign = ({letter, image }) => {
    return (
        <div className="translation-sign">
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
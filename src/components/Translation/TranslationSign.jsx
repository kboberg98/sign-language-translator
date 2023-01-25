const TranslationSign = ({letter, image }) => {
    return (
        <div className="translation-sign">
            <img src={ image } alt={ letter } width="55" />
        </div>
    )
}

export default TranslationSign
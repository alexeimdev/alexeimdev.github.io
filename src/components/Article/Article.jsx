import './Article.css'

function Article(props) {
    return (
        <label className={'article-label ' + (props.selected ? ' selected ' : '')}>{props.label}
            <input
                type='radio'
                name="article"
                value={props.value}
                className='article-input'
                onChange={props.onChange} />
        </label>
    )
}

export default Article;
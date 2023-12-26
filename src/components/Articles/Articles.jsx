import './Articles.css'
import Article from '../Article/Article';

function Articles(props) {
    const articles = [
        { label: "der", value: "der" },
        { label: "die", value: "die" },
        { label: "das", value: "das" },
    ];

    return (
        <div className="articles-wrapper">
            {articles.map(article => (
                <Article
                    label={article.label}
                    value={article.value}
                    onChange={props.onChange}
                    selected={props.value === article.value} />
            ))}
        </div>
    )
}

export default Articles;
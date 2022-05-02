const React = require('react')
const ItIsNotNamedDefault = require('./layouts/default')

function Index({ breads, title }) {
    return (
        <ItIsNotNamedDefault title={title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/breads/${index}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </ItIsNotNamedDefault>
    )
}

module.exports = Index
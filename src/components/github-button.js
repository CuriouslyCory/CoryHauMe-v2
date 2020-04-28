import React from "react"
import githubLogo from '../../content/assets/GitHub-Mark-Light-64px.png'
import '../styles/github-button.scss'

class GithubButton extends React.Component {

    render() {
        const { repoName } = this.props;
        const repoLink = `https://www.github.com/CuriouslyCory/${repoName}`

        return(
            <a href={repoLink}>
                <img src={githubLogo} alt="view this site on github" className="sm-logo"/>
            </a>
        )
    }
}


export default GithubButton

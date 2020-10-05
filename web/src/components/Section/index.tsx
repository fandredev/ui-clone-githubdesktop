import React from 'react'
import './styles.scss'
import authorizateCommit from '../../assets/images/authoring.png'
import pr from "../../assets/images/pr.png";
import code from "../../assets/images/code.png";

const Section : React.FC = () => {
    return (
      <section id="section">
        <aside>
          <p>
            <h3>Attribute commits with collaborators easily</h3>
            Quickly add co-authors to your commit. Great for pairing and
            excellent for sending a little love/credit to that special someone
            who helped fix that gnarly bug of yours. See the attribution on the
            history page, undo an accidental attribution, and{" "}
            <span>see the co-authors on github.com.</span>
          </p>
          <img
            id="commit"
            src={authorizateCommit}
            alt="Imagem ilustrativa de autorização de commit no github"
          />
        </aside>

        <aside>
          <p>
            <h3>Checkout branches with pull requests and view CI statuses</h3>
            See all open pull requests for your repositories and check them out
            as if they were a local branch, even if they're from upstream
            branches or forks. See which pull requests pass commit status
            checks, too!
          </p>
          <img
            id="pr"
            src={pr}
            alt="Imagem ilustrativa de um pull request no github"
          />
        </aside>
        <aside>
          <p>
            <h3>
              Syntax highlighted diffs The new GitHub Desktop supports syntax
            </h3>
            highlighting when viewing diffs for a variety of different
            languages.
          </p>
          <img
            id="code"
            src={code}
            alt="Imagem ilustrativa de um código em java no github"
          />
        </aside>
      </section>
    );
}

export default Section
